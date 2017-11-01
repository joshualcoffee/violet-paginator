'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortLink = SortLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = require('immutable');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _PaginationWrapper = require('./PaginationWrapper');

var _PaginationWrapper2 = _interopRequireDefault(_PaginationWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortLink(_ref) {
  var actions = _ref.actions,
      field = _ref.field,
      text = _ref.text,
      _ref$paginator = _ref.paginator,
      paginator = _ref$paginator === undefined ? (0, _immutable.Map)() : _ref$paginator,
      _ref$sortable = _ref.sortable,
      sortable = _ref$sortable === undefined ? true : _ref$sortable;

  if (!sortable) {
    return _react2.default.createElement(
      'span',
      null,
      text
    );
  }

  var sort = function sort() {
    return actions.sort(field, !paginator.get('sortReverse'));
  };

  var arrow = paginator.get('sort') === field && (paginator.get('sortReverse') ? 'angle-up' : 'angle-down');

  return _react2.default.createElement(
    'a',
    { onClick: sort },
    text,
    ' ',
    _react2.default.createElement(_reactFontawesome2.default, { name: arrow || '' })
  );
}

SortLink.propTypes = {
  paginator: _propTypes2.default.object,
  actions: _propTypes2.default.object,
  field: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  sortable: _propTypes2.default.bool
};

exports.default = (0, _PaginationWrapper2.default)(SortLink);