import React from 'react'
import { useState } from 'react';
export default function ListSong (props) {
  return (

    <>
    <ul style={{textAlign: 'center', width: '300px', border: '1px solid #333', margin: '10px auto'}}>
    {
        props.listSongs.map ((data) => (
            <li key={data + Math.random () * 10}>{data}</li>
        ))
    }
    </ul>
    </>
  )
}
