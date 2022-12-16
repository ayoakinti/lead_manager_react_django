import React, { Component } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";
import PropTypes from "prop-types";

export class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    email: "",
    message: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addLead(this.state);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body my-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              onChange={this.onChange}
              value={name}
              name="name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              onChange={this.onChange}
              value={email}
              name="email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              type="text"
              onChange={this.onChange}
              value={message}
              name="message"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
