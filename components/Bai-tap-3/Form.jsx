import React, { Component } from 'react'

export default class Form extends Component {
  render() {

    const input = document.getElementById ('form-content');


    return (
        <>
        <form>
            <input id='form-content' style={{height: '30px', outline: 'none'}} type="text" placeholder='giá trị state' />
            <button onClick={() => {
                const input = document.getElementById ('form-content').value;
                this.props.formSubmit (input)
            }} style={{border: '1px solid #333', display: 'block', margin: '5px auto'}} type='button'>thay đổi state</button>
        </form>
        </>
    )
  }
}
