import GL from "gl-react";
import React from "react";
import PropTypes from "prop-types";

import createGLComponent from "../utils/createGLComponent";

export default createGLComponent({
  displayName: "Sharpen",
  defaultProps: {
    factor: 0
  },
  propTypes: {
    factor: PropTypes.number
  },
  frag: `
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t;
    uniform float factor;
    uniform vec2 resolution; 

    void main() {
      float test = factor;
      vec2 step = 1.0 / resolution;

      vec3 texA = texture2D( t, uv + vec2(-step.x, -step.y) * 1.5 ).rgb;
      vec3 texB = texture2D( t, uv + vec2( step.x, -step.y) * 1.5 ).rgb;
      vec3 texC = texture2D( t, uv + vec2(-step.x,  step.y) * 1.5 ).rgb;
      vec3 texD = texture2D( t, uv + vec2( step.x,  step.y) * 1.5 ).rgb;
      
      vec3 around = 0.25 * (texA + texB + texC + texD);
      vec3 center  = texture2D( t, uv ).rgb;
      vec3 col = center + (center - around) * factor;

      gl_FragColor = vec4(col, 1.0);
    }
  `,
  receiveValues: ["factor", "resolution"]
});
