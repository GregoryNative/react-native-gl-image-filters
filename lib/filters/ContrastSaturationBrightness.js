"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      \n      uniform float contrast;\n      uniform float saturation;\n      uniform float brightness;\n      \n      const vec3 L = vec3(0.2125, 0.7154, 0.0721);\n      \n      void main() {\n        vec4 c = texture2D(t, uv);\n        vec3 brt = c.rgb * brightness;\n        gl_FragColor = vec4(\n          mix(\n            vec3(0.5),\n            mix(vec3(dot(brt, L)), brt, saturation),\n            contrast\n          ),\n          c.a\n        );\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      \n      uniform float contrast;\n      uniform float saturation;\n      uniform float brightness;\n      \n      const vec3 L = vec3(0.2125, 0.7154, 0.0721);\n      \n      void main() {\n        vec4 c = texture2D(t, uv);\n        vec3 brt = c.rgb * brightness;\n        gl_FragColor = vec4(\n          mix(\n            vec3(0.5),\n            mix(vec3(dot(brt, L)), brt, saturation),\n            contrast\n          ),\n          c.a\n        );\n      }\n    "]);

exports.default = ContrastSaturationBrightness;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  csb: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function ContrastSaturationBrightness(_ref) {
  var _ref$brightness = _ref.brightness,
      brightness = _ref$brightness === undefined ? 1 : _ref$brightness,
      _ref$contrast = _ref.contrast,
      contrast = _ref$contrast === undefined ? 1 : _ref$contrast,
      _ref$saturation = _ref.saturation,
      saturation = _ref$saturation === undefined ? 1 : _ref$saturation,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.csb,
    uniforms: {
      brightness: brightness,
      contrast: contrast,
      saturation: saturation,
      t: t
    }
  });
}
//# sourceMappingURL=ContrastSaturationBrightness.js.map