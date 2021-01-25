import { Shaders, Node, GLSL } from 'gl-react';
import React from 'react';

const shaders = Shaders.create({
  csb: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      
      uniform float contrast;
      uniform float saturation;
      uniform float brightness;
      
      const vec3 L = vec3(0.2125, 0.7154, 0.0721);
      
      void main() {
        vec4 c = texture2D(t, uv);
        vec3 brt = c.rgb * brightness;
        gl_FragColor = vec4(
          mix(
            vec3(0.5),
            mix(vec3(dot(brt, L)), brt, saturation),
            contrast
          ),
          c.a
        );
      }
    `
  }
});

export const DefaultValue = Object.freeze({
  brightness: 1,
  contrast: 1,
  saturation: 1,
});

export default function ContrastSaturationBrightness({
  brightness = DefaultValue.brightness,
  contrast = DefaultValue.contrast,
  saturation = DefaultValue.saturation,
  children: t
}) {
  return (
    <Node
      shader={shaders.csb}
      uniforms={{
        brightness,
        contrast,
        saturation,
        t,
      }}
    />
  )
}
