import React from 'react'

export default function InputSong(props) {
  return (
      <>
      <h2>Bài tập  7 - Thêm mới và xoá phần tử trong một danh sách nhập từ ô input</h2>
        <form>
            <div>
                <label style={{display: 'block'}} htmlFor="songName">Tên bài hát mới</label>
                <input style={{height: '30px', outline: 'none'}} type="text" placeholder='Nhập tên bài hát' id='songName' /> 
            </div>

            <div>
                <button onClick={() => {
                    const songName = document.getElementById ('songName').value;
                    if (songName == '') {
                        return;
                    }
                    props.addSong (songName);
                }} type='button' style={{border: '1px solid #333', marginTop: '10px'}}>Thêm bài hát</button>
            </div>
        </form>
    </>

  )
}
