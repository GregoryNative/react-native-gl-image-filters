import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

import directionForPassDefault from '../utils/directionForPassDefault';

const shaders = Shaders.create({
  blur: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform vec2 direction, resolution;

      vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3846153846) * direction;
        vec2 off2 = vec2(3.2307692308) * direction;
        color += texture2D(image, uv) * 0.2270270270;
        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
        return color;
      }

      void main () {
        gl_FragColor = blur9(t, uv, resolution, direction);
      }
    `
  }
});

export const DefaultValue = 0;

export default function Blur({
  width,
  height,
  factor = DefaultValue,
  children,
  passes = 2,
  directionForPass = directionForPassDefault
}) {
  const rec = pass =>
    pass <= 0 ? (
      children
    ) : (
      <Node
        shader={shaders.blur}
        width={width}
        height={height}
        uniforms={{
          direction: directionForPass(pass, factor, passes),
          resolution: [width, height],
          t: rec(pass - 1)
        }}
      />
    );

  return rec(passes);
}
