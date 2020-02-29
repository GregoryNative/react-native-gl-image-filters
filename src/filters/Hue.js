import { Shaders, Node, GLSL } from "gl-react";
import React from "react";

const shaders = Shaders.create({
  hue: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float hue;
  
      const mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.595716, -0.274453, -0.321263, 0.211456, -0.522591, 0.311135);
      const mat3 yiq2rgb = mat3(1.0, 0.9563, 0.6210, 1.0, -0.2721, -0.6474, 1.0, -1.1070, 1.7046);
  
      void main() {
        vec4 c = texture2D(t, uv);
        vec3 yColor = rgb2yiq * c.rgb;
        float originalHue = atan(yColor.b, yColor.g);
        float finalHue = originalHue + hue;
        float chroma = sqrt(yColor.b*yColor.b+yColor.g*yColor.g);
        vec3 yFinalColor = vec3(yColor.r, chroma * cos(finalHue), chroma * sin(finalHue));
        
        gl_FragColor = vec4(yiq2rgb * yFinalColor, c.a);
      }
    `
  }
});

export default function Hue({ factor = 0, children: t }) {
  return (
    <Node
      shader={shaders.hue}
      uniforms={{
        hue: factor,
        t,
      }}
    />
  )
}
