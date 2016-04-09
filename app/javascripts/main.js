var LandingPage = React.createClass({
  render: function() {
    return (
      <div className="Page">
        <div className="Page-Form">
          <PageForm />
        </div>
      </div>
    );
  }
});

var PageForm = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return React.createElement('form', {className: 'Page-Form'},
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />,
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
});

function main() {
  ReactDOM.render(
    <LandingPage />,
    document.getElementById('example')
  );
}
