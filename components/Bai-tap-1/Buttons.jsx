import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <>
        <button className='button' onClick={this.props.startClock}>Bắt Đầu Chạy</button>
        <button className='button' onClick={this.props.stopClock}>Dừng Lại</button>
        <button className='button' onClick={this.props.resetClock}>Reset</button>
      </>
    )
  }
}
