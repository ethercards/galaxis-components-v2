import React, { useEffect, useState } from 'react';
import { forwardRef } from 'react';
// import FullscreenModal from '../../Components/FullscreenModal'
import flip_icon from '../assets/images/flip-icon.svg';
import close_icon from '../assets/images/close_png.png';

const CardBack = ({ backImage, onClick, type, highLighted }) => {
  const [showFlipIcon, setshowFlipIcon] = useState(false);
  const [mobileView, setmobileView] = useState(false);
  const [backIsVideo, setbackIsVideo] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }
    if (type && type === 'video') {
      setbackIsVideo(true);
    }
  }, []);

  return (
    <>
      <div
        className="card-back-root"
        style={{
          backgroundImage: !backIsVideo ? `url(${backImage})` : 'unset',
        }}
        onMouseOver={() => {
          setshowFlipIcon(true);
        }}
        onMouseLeave={() => {
          setshowFlipIcon(!highLighted?false:true);
        }}
      >
        {!backIsVideo ? (
          <img className="flipped-img" src={backImage} alt="not found" />
        ) : (
          <video
            className="flipped-img"
            alt="not found"
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src={backImage} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        )}
        {!highLighted?
          <div className="card-icons-holder">
            <img
              src={flip_icon}
              className="flip-icon"
              alt="not found"
              style={{ display: showFlipIcon || mobileView ? 'block' : 'none' }}
              onClick={(e) => {
                onClick(e);
              }}
            />
          </div>
        :
            <div className="trait-container-v2">
              <div  className='trait-holder-v2' 
                    style={{clipPath: "url(#svgPath)" }}
                    onClick={(e) => {
                      onClick(e);
                    }}
              >
                <img
                  src={close_icon}
                  className="flip-icon"
                  alt="BACK"
                  style={{ display: showFlipIcon || mobileView ? 'block' : 'none' }}
                  onClick={(e) => {
                    onClick(e);
                  }}
                />
              </div>
            </div>  
        
        }
      </div>
      {/* <FullscreenModal setOpen={setOpen} isOpen={open} imgSrc={fullscreenSrc} /> */}
    </>
  );
};

export default CardBack;
