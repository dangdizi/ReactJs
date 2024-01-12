import React, { Component } from 'react'
import Buttons from './Buttons'
export default class Timer extends Component {

    constructor (props) {
        super ();

        this.state = {
            timer: props.timer,
            running: false
        }

        this.startClock = this.startClock.bind (this);
        this.stopClock = this.stopClock.bind (this);
        this.resetClock = this.resetClock.bind (this);
    }


    startClock () {

        this.setState({running: true});

        const clockRunning = setInterval (() => {
            if (this.state.running) {
                this.setState ({timer: this.state.timer + 1});
            } else {
                clearInterval (clockRunning);
            }
        }, 1000);

    }

    stopClock () {
        this.setState ({running: false});
    }

    resetClock () {
        this.stopClock ();
        this.setState ({timer: this.props.timer});
    }


  render() {
    const timer = this.state.timer;
    return (
        <>
            <div>Đồng hồ</div>
            <div style={{background: '#333', color: 'white', padding: "10px", margin: '10px auto'}}>{Math.floor (timer / 60 / 60).toString().padStart (2, '0')}:{Math.floor (timer / 60).toString ().padStart (2, '0')}:{(timer % 60).toString ().padStart (2, '0')}</div>
            <Buttons startClock={this.startClock} stopClock={this.stopClock} resetClock={this.resetClock}></Buttons>
        </>
    )
  }
}
