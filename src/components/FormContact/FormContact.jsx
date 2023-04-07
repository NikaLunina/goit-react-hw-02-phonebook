import React, { Component } from 'react';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  hendleSubmit = e => {
    e.preventDefault();
    this.props.onClickSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>

        <label>Number
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
         
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
