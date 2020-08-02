"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float factor;\n      \n      void main() {\n        vec4 c = texture2D(t, uv);\n\n        gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float factor;\n      \n      void main() {\n        vec4 c = texture2D(t, uv);\n\n        gl_FragColor = vec4(mix(c.rgb, 1.0 - c.rgb, factor), c.a);\n      }\n    "]);

exports.default = Negative;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  negative: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Negative(_ref) {
  var _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 0 : _ref$factor,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.negative,
    uniforms: {
      factor: factor,
      t: t
    }
  });
}
//# sourceMappingURL=Negative.js.map