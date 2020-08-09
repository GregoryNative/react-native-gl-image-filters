"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      float gamma = 0.0;\n      \n      uniform sampler2D t;\n      uniform float factor;\n      \n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n            \n      vec3 Exposure(vec3 base, float exposure, float gamma) {\n        float amt = mix(0.009, 0.98, exposure);\n        vec3 res, blend;\n      \n        if (amt < 0.0) {\n          res = mix(vec3(0.0), base, amt + 1.0);\n          blend = mix(base, vec3(0.0), amt + 1.0);\n          res = min(res / (1.0 - blend*0.9), 1.0);\n        } else {\n          res = mix(base, vec3(1.0), amt);\n          blend = mix(vec3(1.0), pow(base, vec3(1.0/0.7)), amt);\n          res = max(1.0 - ((1.0 - res) / blend), 0.0);\n        }\n      \n        return pow(\n          SetLum(SetSat(base, Sat(res)), Lum(res)),\n          vec3(ramp(1.0 - (gamma + 1.0) / 2.0))\n        );\n      }\n\n      void main() {\n        float exposure = factor;\n        vec4 c = texture2D(t, uv);\n        vec3 result = c.rgb;\n        \n        result = Exposure(result, exposure, gamma);\n        result = mix(c.rgb, result, c.a);\n        \n        gl_FragColor = vec4(result, c.a);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      float gamma = 0.0;\n      \n      uniform sampler2D t;\n      uniform float factor;\n      \n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n            \n      vec3 Exposure(vec3 base, float exposure, float gamma) {\n        float amt = mix(0.009, 0.98, exposure);\n        vec3 res, blend;\n      \n        if (amt < 0.0) {\n          res = mix(vec3(0.0), base, amt + 1.0);\n          blend = mix(base, vec3(0.0), amt + 1.0);\n          res = min(res / (1.0 - blend*0.9), 1.0);\n        } else {\n          res = mix(base, vec3(1.0), amt);\n          blend = mix(vec3(1.0), pow(base, vec3(1.0/0.7)), amt);\n          res = max(1.0 - ((1.0 - res) / blend), 0.0);\n        }\n      \n        return pow(\n          SetLum(SetSat(base, Sat(res)), Lum(res)),\n          vec3(ramp(1.0 - (gamma + 1.0) / 2.0))\n        );\n      }\n\n      void main() {\n        float exposure = factor;\n        vec4 c = texture2D(t, uv);\n        vec3 result = c.rgb;\n        \n        result = Exposure(result, exposure, gamma);\n        result = mix(c.rgb, result, c.a);\n        \n        gl_FragColor = vec4(result, c.a);\n      }\n    "]);

exports.default = Exposure;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _shadersFunctions = require("../utils/shaders-functions");

var ShadersFunctions = _interopRequireWildcard(_shadersFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  exposure: {
    frag: (0, _glReact.GLSL)(_templateObject, ShadersFunctions.ramp, ShadersFunctions.Lum, ShadersFunctions.ClipColor, ShadersFunctions.SetLum, ShadersFunctions.Sat, ShadersFunctions.SetSat)
  }
});

function Exposure(_ref) {
  var _ref$exposure = _ref.exposure,
      exposure = _ref$exposure === undefined ? 0 : _ref$exposure,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.exposure,
    uniforms: {
      factor: exposure,
      t: t
    }
  });
}
//# sourceMappingURL=Exposure.js.map