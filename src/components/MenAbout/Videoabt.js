import React from 'react'
import VdoImg from '../../assets/images/who_chef.png'
import videoSrc from '../../assets/video/video.mp4';

function videoabt() {
    return (
        <>
            <div className="video_section">
                <div className="chef_img">
                    <img src={VdoImg} id="chef_img_id" alt="img" style={{opacity:1}} />
                </div>
                <video id="videoBlock" className="img-fluid" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default videoabt