import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

import * as ShadersFunctions from '../utils/shaders-functions';

const shaders = Shaders.create({
  ColorOverlay: {
    frag: GLSL` 
      precision highp float;

      varying vec2 uv;
      uniform sampler2D t;
      uniform vec4 factor;
      
      ${ShadersFunctions.Mix}
      ${ShadersFunctions.ClampRGBVec3}

      void main() {
        vec4 c = texture2D(t, uv);

        vec3 passedColor = ClampRGBVec3(factor.rgb);
        gl_FragColor = vec4(Mix(c.rgb, passedColor, factor.a), 1.0);
      }
    `
  }
});

export const DefaultValue = [.0, .0, .0, .0];

export default function ColorOverlay({
  factor = DefaultValue,
  children: t
}) {
  return (
    <Node
      shader={shaders.ColorOverlay}
      uniforms={{
        factor,
        t,
      }}
    />
  )
}
