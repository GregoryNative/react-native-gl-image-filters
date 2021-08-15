import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

const shaders = Shaders.create({
  noop: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
  
      void main() {
        gl_FragColor = texture2D(t, uv);
      }
    `
  }
});

export default function NoopFilter({ children: t }) {
  return (
    <Node
      shader={shaders.noop}
      uniforms={{
        t,
      }}
    />
  )
}
