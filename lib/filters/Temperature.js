"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float temp;\n      uniform vec2 resolution;\n\n      const float LuminancePreservationFactor = 1.0;\n      const float PI2 = 6.2831853071;\n\n      vec3 colorTemperatureToRGB(const in float temperature){\n        mat3 m = (temperature <= 6500.0) ? mat3(vec3(0.0, -2902.1955373783176, -8257.7997278925690),\n        vec3(0.0, 1669.5803561666639, 2575.2827530017594),\n        vec3(1.0, 1.3302673723350029, 1.8993753891711275)) :\n        mat3(vec3(1745.0425298314172, 1216.6168361476490, -8257.7997278925690),\n        vec3(-2666.3474220535695, -2173.1012343082230, 2575.2827530017594),\n        vec3(0.55995389139931482, 0.70381203140554553, 1.8993753891711275));\n        return mix(\n          clamp(vec3(m[0] / (vec3(clamp(temperature, 1000.0, 40000.0)) + m[1]) + m[2]),\n          vec3(0.0), vec3(1.0)), vec3(1.0), smoothstep(1000.0, 0.0, temperature)\n        );\n      }\n\n      void main() {\n        float temperature = temp;\n        float temperatureStrength = 1.0;\n\n        vec3 inColor = texture2D(t, uv).xyz;\n        vec3 outColor = mix(inColor, inColor * colorTemperatureToRGB(temperature), temperatureStrength);\n        #ifdef WithQuickAndDirtyLuminancePreservation\n        outColor *= mix(1.0, dot(inColor, vec3(0.2126, 0.7152, 0.0722)) /\n          max(dot(outColor, vec3(0.2126, 0.7152, 0.0722)), 1e-5), LuminancePreservationFactor);\n        #endif\n\n        gl_FragColor = vec4(outColor, 1.0);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float temp;\n      uniform vec2 resolution;\n\n      const float LuminancePreservationFactor = 1.0;\n      const float PI2 = 6.2831853071;\n\n      vec3 colorTemperatureToRGB(const in float temperature){\n        mat3 m = (temperature <= 6500.0) ? mat3(vec3(0.0, -2902.1955373783176, -8257.7997278925690),\n        vec3(0.0, 1669.5803561666639, 2575.2827530017594),\n        vec3(1.0, 1.3302673723350029, 1.8993753891711275)) :\n        mat3(vec3(1745.0425298314172, 1216.6168361476490, -8257.7997278925690),\n        vec3(-2666.3474220535695, -2173.1012343082230, 2575.2827530017594),\n        vec3(0.55995389139931482, 0.70381203140554553, 1.8993753891711275));\n        return mix(\n          clamp(vec3(m[0] / (vec3(clamp(temperature, 1000.0, 40000.0)) + m[1]) + m[2]),\n          vec3(0.0), vec3(1.0)), vec3(1.0), smoothstep(1000.0, 0.0, temperature)\n        );\n      }\n\n      void main() {\n        float temperature = temp;\n        float temperatureStrength = 1.0;\n\n        vec3 inColor = texture2D(t, uv).xyz;\n        vec3 outColor = mix(inColor, inColor * colorTemperatureToRGB(temperature), temperatureStrength);\n        #ifdef WithQuickAndDirtyLuminancePreservation\n        outColor *= mix(1.0, dot(inColor, vec3(0.2126, 0.7152, 0.0722)) /\n          max(dot(outColor, vec3(0.2126, 0.7152, 0.0722)), 1e-5), LuminancePreservationFactor);\n        #endif\n\n        gl_FragColor = vec4(outColor, 1.0);\n      }\n    "]);

exports.default = Temperature;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  temprature: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Temperature(_ref) {
  var _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 6500 : _ref$factor,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.temprature,
    uniforms: {
      temp: factor,
      t: t
    }
  });
}
//# sourceMappingURL=Temperature.js.map