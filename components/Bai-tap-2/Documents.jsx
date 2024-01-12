import React, { Component } from 'react'

export default class Documents extends Component {

    constructor () {
        super ();

        this.state = {
            documentText: 'text document'
        };

        this.changeText = this.changeText.bind (this);
    }


    changeText () {
        this.setState ({documentText: 'Hi! Đây là bài tập của Đăng'});
    }
  render() {
    return (
        <>
            <h2>Bài Tập 2 - Hiển thị nội dung động với nút bấm.</h2>
            <p>{this.state.documentText}</p>
            <button style={{border: '1px solid #333', marginTop: '20px'}} onClick={this.changeText}>Thay đổi document</button>
        </>
    )
  }
}
