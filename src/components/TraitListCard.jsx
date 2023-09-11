import React, { useEffect, useState } from 'react';
import close_icon from '../assets/images/close_png.png';
import gzero from '../assets/images/genzero.png';

const TraitListCard = ({ traits, onClick, bgColor }) => {

    const[bg,setBg]=useState([0,0,0]);
    const[selectedTraitIdx,setSelectedTraitIdx] = useState(0);
    const[traitActive, setTraitActive] = useState(false);



    useEffect(()=>{
        console.log('traits',traits);
    },[traits])

    useEffect(()=>{
        if(bgColor){
            console.log(bgColor);
            setBg(bgColor);
        }
    },[bgColor])


    const onCloseClicked = (e)=>{
        if(traitActive){
            hideTraitDetails();
            setTraitActive(false);
        }else{
            onClick(e);
        }
    }

    const showTraitDetails = ()=>{
        document.getElementById('trait-base').style.transform =
      'perspective(600px) rotateY(-135deg)';
        
    }

    const hideTraitDetails = ()=>{
        document.getElementById('trait-base').style.transform =
      'perspective(600px) rotateY(0deg)';
    }

   return (
        <>
            
            <div className='trait-card-root'>
                <div className="trait-container-v2">
                    <div  className='trait-holder-v2' 
                            style={{clipPath: "url(#svgPath)" }}
                            onClick={(e) => {
                                onCloseClicked(e);
                            }}
                    >
                        <img
                        src={close_icon}
                        className="flip-icon"
                        alt="BACK"
                        />
                    </div>
                </div>  


                <div className='trait-list-container' style={{ backgroundColor: `rgb(${bg[0]},${bg[1]},${bg[2]})` }}>
                   
                   <div className='traits' id='trait-base'>
                        <div className='content-wrap'>
                        {traits && traits.length>0 &&
                            <>
                                {traits.map((trait, idx) => (
                                    <p key={idx}
                                       onClick={(e)=>{setSelectedTraitIdx(idx);showTraitDetails();setTraitActive(true)}}
                                    >{trait.name}</p>
                                ))}



                            </>
                        }
                            
                        </div>
                        <div className="trait-details">
                            <h3 className='title'>{traits[selectedTraitIdx].name}</h3>
                            <div className='scroll-wrapper'>
                                <p className='description'>{traits[selectedTraitIdx].description}</p>
                            </div>
                        </div>
                   </div>
                   <div className='logo'>
                        <img src={gzero} alt="GenZero" />
                   </div>



                </div>
            </div>

        </>
    );
};


export default TraitListCard;
