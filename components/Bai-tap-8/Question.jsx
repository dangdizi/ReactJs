import React from 'react'

export default function Question(props) {

    return (
        <>
        <h2>Bài tập 8 - Trả lời các câu đố và tính điểm.</h2>

        <div className='question'>
            <p>câu hỏi của bạn là: <b>{props.question}</b></p>
        </div>
        </>
    )
}
