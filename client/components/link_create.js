import React, { Component } from 'react';

class LinkCreate extends Component {
  state = {
    error: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value, err => {
      if (err) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="link" type="text" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
