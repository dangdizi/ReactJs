import React, { useState } from 'react'

export default function Tabs() {

    const [tabContent, setState] = useState ('mời bạn chọn tab');

    const changeTab = (tab) => {
        setState (tab);
    }

    return (
        <>
            <h2>Bài Tập 6 - Tạo một component Tabs trong React và hiển thị nội dung tương ứng với tab được chọn.</h2>
            <div className='tabs' style={{border: '1px solid #333'}}>{tabContent}</div>
            <button onClick={() => {changeTab ('bạn đã nhấn vào nút con gà, cục tác!')}} style={{border: '1px solid #333', margin: '5px'}}>Con gà</button>
            <button onClick={() => {changeTab ('bạn dã nhấn vào nút con vịt, quạc quạc!')}} style={{border: '1px solid #333', margin: '5px'}}>Con vịt</button>
            <button onClick={() => {changeTab ('bạn dã nhấn vào nút con lợn, ủn ủn!')}} style={{border: '1px solid #333', margin: '5px'}}>Con lợn</button>
        </>
    )
}
