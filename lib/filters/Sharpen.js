"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float factor;\n      uniform vec2 resolution; \n\n      void main() {\n        float test = factor;\n        vec2 step = 1.0 / resolution;\n\n        vec3 texA = texture2D( t, uv + vec2(-step.x, -step.y) * 1.5 ).rgb;\n        vec3 texB = texture2D( t, uv + vec2( step.x, -step.y) * 1.5 ).rgb;\n        vec3 texC = texture2D( t, uv + vec2(-step.x,  step.y) * 1.5 ).rgb;\n        vec3 texD = texture2D( t, uv + vec2( step.x,  step.y) * 1.5 ).rgb;\n        \n        vec3 around = 0.25 * (texA + texB + texC + texD);\n        vec3 center  = texture2D( t, uv ).rgb;\n        vec3 col = center + (center - around) * factor;\n\n        gl_FragColor = vec4(col, 1.0);\n      }\n    "], ["\n      precision highp float;\n      varying vec2 uv;\n      uniform sampler2D t;\n      uniform float factor;\n      uniform vec2 resolution; \n\n      void main() {\n        float test = factor;\n        vec2 step = 1.0 / resolution;\n\n        vec3 texA = texture2D( t, uv + vec2(-step.x, -step.y) * 1.5 ).rgb;\n        vec3 texB = texture2D( t, uv + vec2( step.x, -step.y) * 1.5 ).rgb;\n        vec3 texC = texture2D( t, uv + vec2(-step.x,  step.y) * 1.5 ).rgb;\n        vec3 texD = texture2D( t, uv + vec2( step.x,  step.y) * 1.5 ).rgb;\n        \n        vec3 around = 0.25 * (texA + texB + texC + texD);\n        vec3 center  = texture2D( t, uv ).rgb;\n        vec3 col = center + (center - around) * factor;\n\n        gl_FragColor = vec4(col, 1.0);\n      }\n    "]);

exports.default = Temperature;

var _glReact = require("gl-react");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shaders = _glReact.Shaders.create({
  sharpen: {
    frag: (0, _glReact.GLSL)(_templateObject)
  }
});

function Temperature(_ref) {
  var _ref$factor = _ref.factor,
      factor = _ref$factor === undefined ? 0 : _ref$factor,
      width = _ref.width,
      height = _ref.height,
      t = _ref.children;

  return _react2.default.createElement(_glReact.Node, {
    shader: shaders.sharpen,
    uniforms: {
      factor: factor,
      resolution: [width, height],
      t: t
    }
  });
}
//# sourceMappingURL=Sharpen.js.map