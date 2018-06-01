"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * link
 **/
const Link = props => {
  const {
    href,
    label,
    id,
    className,
    align,
    children,
    medium
  } = props;
  const linkLabel = label || children;
  const availableIn = (0, _utils.setMedium)(medium);
  return _react.default.createElement("table", {
    align: align,
    className: (0, _classnames.default)('htmplar-link', className, availableIn)
  }, _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("a", {
    href: href,
    id: id
  }, linkLabel))));
};

Link.defaultProps = {
  align: 'center',
  href: '#',
  medium: 'both'
};
Link.propTypes = {
  href: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  id: _propTypes.default.string.isRequired,
  medium: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.array]),
  align: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = Link;
exports.default = _default;