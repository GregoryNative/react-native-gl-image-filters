import GL from "gl-react";
import React from "react";
import PropTypes from "prop-types";

import mixArrays from "../utils/mixArrays";

const shaders = GL.Shaders.create({
  Sepia: {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform mat4 sepia;

      void main () {
        gl_FragColor = sepia * texture2D(t, uv);
      }
    `
  }
});

export default GL.createComponent(
({ children: t, sepia: s }) => {
  const sepia = mixArrays([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ], [
    .3, .3, .3, 0,
    .6, .6, .6, 0,
    .1, .1, .1, 0,
    0.2, 0, -0.2, 1
  ], s);

  return (
    <GL.Node
      shader={shaders.Sepia}
      uniforms={{ t, sepia }}
    />
  );
},
{
  displayName: "Sepia",
  defaultProps: {
    sepia: 0,
  },
  propTypes: {
    children: PropTypes.any.isRequired,
    sepia: PropTypes.number,
  }
});
