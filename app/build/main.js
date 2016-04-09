var LandingPage = React.createClass({
  displayName: "LandingPage",

  render: function () {
    return React.createElement(
      "div",
      { className: "Page" },
      React.createElement(
        "div",
        { className: "Page-Form" },
        React.createElement(PageForm, null)
      )
    );
  }
});

var PageForm = React.createClass({
  displayName: "PageForm",

  getInitialState: function () {
    return { value: 'Hello!' };
  },
  handleChange: function (event) {
    this.setState({ value: event.target.value });
  },
  render: function () {
    return React.createElement('form', { className: 'Page-Form' }, React.createElement("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }), React.createElement("input", {
      type: "text",
      value: this.state.value,
      onChange: this.handleChange
    }));
  }
});

function main() {
  ReactDOM.render(React.createElement(LandingPage, null), document.getElementById('example'));
}