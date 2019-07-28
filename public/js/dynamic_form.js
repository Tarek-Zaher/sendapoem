"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DynamicForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DynamicForm, _React$Component);

  function DynamicForm(props) {
    var _this;

    _classCallCheck(this, DynamicForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicForm).call(this, props));
    _this.state = {
      person: ''
    };
    return _this;
  }

  _createClass(DynamicForm, [{
    key: "selectPerson",
    value: function selectPerson() {
      this.setState({
        person: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        action: "/",
        method: "post"
      }, React.createElement("div", {
        className: "select-style"
      }, React.createElement("select", {
        name: "person",
        onChange: this.selectPerson.bind(this)
      }, React.createElement("option", {
        value: "",
        disabled: true,
        selected: true
      }, "Person"), React.createElement("option", {
        value: "mother"
      }, "Mother"), React.createElement("option", {
        value: "significant-other"
      }, "SO"), React.createElement("option", {
        value: "thanos"
      }, "Thanos (User Submitted)"))), this.state.person === "mother" && React.createElement("div", {
        className: "select-style"
      }, React.createElement("select", {
        name: "mood"
      }, React.createElement("option", {
        value: "",
        disabled: true,
        selected: true
      }, "Mood"), React.createElement("option", {
        value: "general-thanks"
      }, "General Thanks"), React.createElement("option", {
        value: "birthday"
      }, "Birthday"), React.createElement("option", {
        value: "romantic"
      }, "Romantic"), React.createElement("option", {
        value: "anger"
      }, "Anger"))), this.state.person === "significant-other" && React.createElement("div", {
        className: "select-style"
      }, React.createElement("select", {
        name: "mood"
      }, React.createElement("option", {
        value: "",
        disabled: true,
        selected: true
      }, "Mood"), React.createElement("option", {
        value: "general-thanks"
      }, "General Thanks"), React.createElement("option", {
        value: "birthday"
      }, "Birthday"), React.createElement("option", {
        value: "romantic"
      }, "Romantic"), React.createElement("option", {
        value: "anger"
      }, "Anger"))), this.state.person === "thanos" && React.createElement("div", {
        className: "select-style"
      }, React.createElement("select", {
        name: "mood"
      }, React.createElement("option", {
        value: "",
        disabled: true,
        selected: true
      }, "Mood"), React.createElement("option", {
        value: "did-nothing-wrong"
      }, "Did Nothing Wrong"), React.createElement("option", {
        value: "sad"
      }, "Sad"), React.createElement("option", {
        value: "anger"
      }, "Anger"), React.createElement("option", {
        value: "impatient"
      }, "Impatient"))), React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Your Name",
        autocomplete: "off",
        arialabel: "Your Name"
      }), React.createElement("button", {
        type: "submit",
        name: "button"
      }, "Generate!")));
    }
  }]);

  return DynamicForm;
}(React.Component);

ReactDOM.render(React.createElement(DynamicForm, null), document.getElementById('Form'));
