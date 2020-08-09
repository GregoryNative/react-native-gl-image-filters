<<<<<<< HEAD
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("react"),_react2=_interopRequireDefault(_react),_Sepia=require("./filters/Sepia"),_Sepia2=_interopRequireDefault(_Sepia),_Hue=require("./filters/Hue"),_Hue2=_interopRequireDefault(_Hue),_Blur=require("./filters/Blur"),_Blur2=_interopRequireDefault(_Blur),_Sharpen=require("./filters/Sharpen"),_Sharpen2=_interopRequireDefault(_Sharpen),_Negative=require("./filters/Negative"),_Negative2=_interopRequireDefault(_Negative),_Temperature=require("./filters/Temperature"),_Temperature2=_interopRequireDefault(_Temperature),_ContrastSaturationBrightness=require("./filters/ContrastSaturationBrightness"),_ContrastSaturationBrightness2=_interopRequireDefault(_ContrastSaturationBrightness);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(a){var b=a.children,c=a.width,d=a.height,e=a.hue,f=a.blur,g=a.sepia,h=a.sharpen,i=a.negative,j=a.contrast,k=a.saturation,l=a.brightness,m=a.temperature;return _react2.default.createElement(_Sepia2.default,{factor:g},_react2.default.createElement(_Hue2.default,{factor:e},_react2.default.createElement(_Negative2.default,{factor:i},_react2.default.createElement(_Temperature2.default,{factor:m},_react2.default.createElement(_ContrastSaturationBrightness2.default,{contrast:j,saturation:k,brightness:l},_react2.default.createElement(_Blur2.default,{factor:f,passes:4,height:d,width:c},_react2.default.createElement(_Sharpen2.default,{factor:h,height:d,width:c},b)))))))};
=======
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Sepia = require("./filters/Sepia");

var _Sepia2 = _interopRequireDefault(_Sepia);

var _Hue = require("./filters/Hue");

var _Hue2 = _interopRequireDefault(_Hue);

var _Blur = require("./filters/Blur");

var _Blur2 = _interopRequireDefault(_Blur);

var _Sharpen = require("./filters/Sharpen");

var _Sharpen2 = _interopRequireDefault(_Sharpen);

var _Negative = require("./filters/Negative");

var _Negative2 = _interopRequireDefault(_Negative);

var _Temperature = require("./filters/Temperature");

var _Temperature2 = _interopRequireDefault(_Temperature);

var _ContrastSaturationBrightness = require("./filters/ContrastSaturationBrightness");

var _ContrastSaturationBrightness2 = _interopRequireDefault(_ContrastSaturationBrightness);

var _Exposure = require("./filters/Exposure");

var _Exposure2 = _interopRequireDefault(_Exposure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      hue = _ref.hue,
      blur = _ref.blur,
      sepia = _ref.sepia,
      sharpen = _ref.sharpen,
      negative = _ref.negative,
      contrast = _ref.contrast,
      saturation = _ref.saturation,
      brightness = _ref.brightness,
      temperature = _ref.temperature,
      exposure = _ref.exposure;

  return _react2.default.createElement(
    _Sepia2.default,
    { factor: sepia },
    _react2.default.createElement(
      _Hue2.default,
      { factor: hue },
      _react2.default.createElement(
        _Exposure2.default,
        { exposure: exposure },
        _react2.default.createElement(
          _Negative2.default,
          { factor: negative },
          _react2.default.createElement(
            _Temperature2.default,
            { factor: temperature },
            _react2.default.createElement(
              _ContrastSaturationBrightness2.default,
              {
                contrast: contrast,
                saturation: saturation,
                brightness: brightness
              },
              _react2.default.createElement(
                _Blur2.default,
                { factor: blur, passes: 4, height: height, width: width },
                _react2.default.createElement(
                  _Sharpen2.default,
                  { factor: sharpen, height: height, width: width },
                  children
                )
              )
            )
          )
        )
      )
    )
  );
};
>>>>>>> 4269836... add exposure filter 🎉
//# sourceMappingURL=index.js.map