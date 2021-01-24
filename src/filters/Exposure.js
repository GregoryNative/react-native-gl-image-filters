import { Shaders, Node, GLSL } from "gl-react";
import React from "react";

import * as ShadersFunctions from "../utils/shaders-functions";

const shaders = Shaders.create({
  exposure: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      float gamma = 0.0;
      
      uniform sampler2D t;
      uniform float factor;
      
      ${ShadersFunctions.ramp}
      ${ShadersFunctions.Lum}
      ${ShadersFunctions.ClipColor}
      ${ShadersFunctions.SetLum}
      ${ShadersFunctions.Sat}
      ${ShadersFunctions.SetSat}
            
      vec3 Exposure(vec3 base, float exposure, float gamma) {
        float amt = mix(0.009, 0.98, exposure);
        vec3 res, blend;
      
        if (amt < 0.0) {
          res = mix(vec3(0.0), base, amt + 1.0);
          blend = mix(base, vec3(0.0), amt + 1.0);
          res = min(res / (1.0 - blend*0.9), 1.0);
        } else {
          res = mix(base, vec3(1.0), amt);
          blend = mix(vec3(1.0), pow(base, vec3(1.0/0.7)), amt);
          res = max(1.0 - ((1.0 - res) / blend), 0.0);
        }
      
        return pow(
          SetLum(SetSat(base, Sat(res)), Lum(res)),
          vec3(ramp(1.0 - (gamma + 1.0) / 2.0))
        );
      }

      void main() {
        float exposure = factor;
        vec4 c = texture2D(t, uv);
        vec3 result = c.rgb;
        
        result = Exposure(result, exposure, gamma);
        result = mix(c.rgb, result, c.a);
        
        gl_FragColor = vec4(result, c.a);
      }
    `
  }
});

export const DefaultValue = 0;

export default function Exposure({ exposure = DefaultValue, children: t }) {
  return (
    <Node
      shader={shaders.exposure}
      uniforms={{
        factor: exposure,
        t,
      }}
    />
  )
}
