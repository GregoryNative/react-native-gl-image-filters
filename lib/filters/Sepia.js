"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform mat4 sepia;\n\n      void main () {\n        gl_FragColor = sepia * texture2D(t, uv);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform mat4 sepia;\n\n      void main () {\n        gl_FragColor = sepia * texture2D(t, uv);\n      }\n    "]);

exports.default = Sepia;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mixArrays = require("../utils/mixArrays");

var _mixArrays2 = _interopRequireDefault(_mixArrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  sepia: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Sepia(_ref) {
  var _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 0 : _ref$factor,
      t = _ref.children;

  var sepia = (0, _mixArrays2.default)([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [.3, .3, .3, 0, .6, .6, .6, 0, .1, .1, .1, 0, 0.2, 0, -0.2, 1], factor);

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.sepia,
    uniforms: {
      sepia: sepia,
      t: t
    }
  });
}
//# sourceMappingURL=Sepia.js.map