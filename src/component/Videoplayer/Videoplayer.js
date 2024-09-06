import React, { useRef } from 'react'
import './Videoplayer.css';
import video from '../../assets/collage_video.mp4';

const Videoplayer = ({playState,setPlayState}) => {

    const player= useRef(null);

    const closeplayer = (e) =>{
        if(e.target === player.current)
        {
            setPlayState(false);
        }
    }
  return (
    <div className={`vid ${playState?'':'hide'}`} ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}   

export default Videoplayer;