'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _requestAnimationFrame = require('./request-animation-frame');

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Entry
 * @module
 */

Object.assign(_config2.default, {
  test: true
});

(0, _requestAnimationFrame2.default)(function () {
  console.log(_config2.default);
});