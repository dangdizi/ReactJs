import React from 'react'

export default function Answer(props) {
  return (<>
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <input style={{height: '35px', outline: 'none', marginRight: '0px'}} type="text" id='answer' placeholder='Câu trả lời...' />
    <button onClick={() => {
        if (document.getElementById ('answer').value == props.answer) {
            props.addPoint ();
            alert ('Câu trả lời đúng, + 1 điểm');
        } else {
            alert ('Gà thế! sai rồi');
        }
    }} style={{border: '1px solid #333'}}>Trả lời</button>
  </div>
    <p>Điểm của bạn:<b>{props.point}</b></p>
  </>)
}
