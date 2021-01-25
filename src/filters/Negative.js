import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

const shaders = Shaders.create({
  negative: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float factor;
      
      void main() {
        vec4 c = texture2D(t, uv);

        gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);
      }
    `
  }
});

export const DefaultValue = 0;

export default function Negative({ factor = DefaultValue, children: t }) {
  return (
    <Node
      shader={shaders.negative}
      uniforms={{
        factor,
        t,
      }}
    />
  )
}
