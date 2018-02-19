import GL from "gl-react";
import React from "react";
import PropTypes from "prop-types";

import createGLComponent from "../utils/createGLComponent";

export default createGLComponent({
  displayName: "Negative",
  defaultProps: { factor: 1 },
  propTypes: { factor: PropTypes.number },
  frag: `
    precision highp float;
    varying vec2 uv;
    uniform sampler2D t;
    uniform float factor;
    
    void main() {
      vec4 c = texture2D(t, uv);

      gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);
    }
  `,
  receiveValues: ["factor"]
});
