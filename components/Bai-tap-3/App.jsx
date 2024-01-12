import React, { Component } from 'react'
import Form from './Form'
export default class Apps extends Component {

    constructor () {
        super ();

        this.state = {
            formContent: ''
        }

        this.formSubmit = this.formSubmit.bind (this);
    }

    formSubmit (value) {
        this.setState ({formContent: value});
    }

  render() {
    return (
      <>
        <h2>Bài Tập 3 - Hiển thị nội dung người dùng nhập vào từ ô</h2>
        <Form formSubmit={this.formSubmit}></Form>
        <p><b>nội dung state</b>: {this.state.formContent}</p>
      </>
    )
  }
}
