"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float hue;\n  \n      const mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.595716, -0.274453, -0.321263, 0.211456, -0.522591, 0.311135);\n      const mat3 yiq2rgb = mat3(1.0, 0.9563, 0.6210, 1.0, -0.2721, -0.6474, 1.0, -1.1070, 1.7046);\n  \n      void main() {\n        vec4 c = texture2D(t, uv);\n        vec3 yColor = rgb2yiq * c.rgb;\n        float originalHue = atan(yColor.b, yColor.g);\n        float finalHue = originalHue + hue;\n        float chroma = sqrt(yColor.b*yColor.b+yColor.g*yColor.g);\n        vec3 yFinalColor = vec3(yColor.r, chroma * cos(finalHue), chroma * sin(finalHue));\n        \n        gl_FragColor = vec4(yiq2rgb * yFinalColor, c.a);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float hue;\n  \n      const mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.595716, -0.274453, -0.321263, 0.211456, -0.522591, 0.311135);\n      const mat3 yiq2rgb = mat3(1.0, 0.9563, 0.6210, 1.0, -0.2721, -0.6474, 1.0, -1.1070, 1.7046);\n  \n      void main() {\n        vec4 c = texture2D(t, uv);\n        vec3 yColor = rgb2yiq * c.rgb;\n        float originalHue = atan(yColor.b, yColor.g);\n        float finalHue = originalHue + hue;\n        float chroma = sqrt(yColor.b*yColor.b+yColor.g*yColor.g);\n        vec3 yFinalColor = vec3(yColor.r, chroma * cos(finalHue), chroma * sin(finalHue));\n        \n        gl_FragColor = vec4(yiq2rgb * yFinalColor, c.a);\n      }\n    "]);

exports.default = Hue;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  hue: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Hue(_ref) {
  var _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 0 : _ref$factor,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.hue,
    uniforms: {
      hue: factor,
      t: t
    }
  });
}
//# sourceMappingURL=Hue.js.map