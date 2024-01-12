import React, { Component } from 'react'
import Timer from './Timer'


export default class Apps extends Component {

    constructor () {
        super ();

        this.state = {
            timer: 0
        };
    }

  render() {

    return (
      <>
      <h2>Bài Tập 1</h2>
      <Timer timer={this.state.timer}></Timer>
      </>
    )
  }
}
