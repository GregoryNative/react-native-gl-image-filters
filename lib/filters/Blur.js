"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform vec2 direction, resolution;\n\n      vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.3846153846) * direction;\n        vec2 off2 = vec2(3.2307692308) * direction;\n        color += texture2D(image, uv) * 0.2270270270;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;\n        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;\n        return color;\n      }\n\n      void main () {\n        gl_FragColor = blur9(t, uv, resolution, direction);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform vec2 direction, resolution;\n\n      vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n        vec4 color = vec4(0.0);\n        vec2 off1 = vec2(1.3846153846) * direction;\n        vec2 off2 = vec2(3.2307692308) * direction;\n        color += texture2D(image, uv) * 0.2270270270;\n        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;\n        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;\n        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;\n        return color;\n      }\n\n      void main () {\n        gl_FragColor = blur9(t, uv, resolution, direction);\n      }\n    "]);

exports.default = Blur;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _directionForPassDefault = require("../utils/directionForPassDefault");

var _directionForPassDefault2 = _interopRequireDefault(_directionForPassDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  blur: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Blur(_ref) {
  var width = _ref.width,
      height = _ref.height,
      _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 0 : _ref$factor,
      children = _ref.children,
      _ref$passes = _ref.passes,
      passes = _ref$passes === undefined ? 2 : _ref$passes,
      _ref$directionForPass = _ref.directionForPass,
      directionForPass = _ref$directionForPass === undefined ? _directionForPassDefault2.default : _ref$directionForPass;

  var rec = function rec(pass) {
    return pass <= 0 ? children : _react2.default.createElement(_glReact.Node, {
      shader: shaders.blur,
      width: width,
      height: height,
      uniforms: {
        direction: directionForPass(pass, factor, passes),
        resolution: [width, height],
        t: rec(pass - 1)
      }
    });
  };

  return rec(passes);
}
//# sourceMappingURL=Blur.js.map