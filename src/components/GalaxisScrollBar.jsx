import React, { useCallback, useEffect, useRef, useState } from "react";

import './GalaxisScrollBar.css';

const GalaxisScrollBar = ({children,style})=>{
	const [hidden, setHidden] = useState(false);
	const [thumbHeight,_setThumbHeight] = useState(100);
  	const thumbHeightRef = useRef(thumbHeight);
	const setThumbHeight = (val) => {
		thumbHeightRef.current = val;
		_setThumbHeight(val)
	}

	const [isDragging, setIsDragging] = useState(false);
	const [currentScrollTop, setCurrentScrollTop] = useState(0);
	const [scrollStartPosition, setScrollStartPosition] = useState(0);


	const observer = useRef(null);
	const scrollRef = useRef(null);
	const contentRef = useRef(null);
	const trackRef = useRef(null);
	const thumbRef = useRef(null);

	useEffect(() => {
		if (contentRef.current && trackRef.current) {
		
		  const ref = contentRef.current;
		  const sRef = scrollRef.current;
		  observer.current = new ResizeObserver(() => {
			
			if(trackRef.current){
				handleResize(ref,trackRef.current.clientHeight);
			}
		  });
		  observer.current.observe(ref);
		  sRef.addEventListener('scroll', updateThumbPos);
		  return () => {
			console.log('unobserve?');
			observer.current.unobserve(ref);
			sRef.removeEventListener('scroll', updateThumbPos);
		  };
		}
	  }, []);

	const updateThumbPos = useCallback(() => {
		if (
			!scrollRef.current ||
			!trackRef.current ||
			!thumbRef.current
		) {
			return;
		}
		const { scrollTop: contentTop, scrollHeight: contentHeight } = scrollRef.current;
		const { clientHeight: trackHeight } = trackRef.current;
		let newTop = (contentTop/(contentHeight-trackHeight)) * (trackHeight- thumbHeightRef.current);
		newTop = Math.min(newTop, trackHeight - thumbHeightRef.current);
		const thumb = thumbRef.current;
		thumb.style.top = `${newTop}px`;
	}, []);

	function handleResize(ref, trackSize) {
		const { clientHeight, scrollHeight } = ref;

		console.log('resize heights',trackSize,clientHeight);

		if(trackSize<clientHeight){
			setThumbHeight(Math.max((trackSize / clientHeight) * trackSize, 70));
			setHidden(false);
		}else{
			setThumbHeight(trackSize);
			setHidden(true);
		}
	}

	/* DRAGGING */


	const handleThumbMouseDown = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
		setScrollStartPosition(e.clientY);
		if (scrollRef.current) {
			console.log('initial scroll top',scrollRef.current.scrollTop);
			setCurrentScrollTop(scrollRef.current.scrollTop);
		}

		console.log('++ START GRAB',scrollRef)
	}, []);

	const handleThumbMouseUp = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		console.log('-- STOP GRAB')
	}, []);

	const handleThumbMouseMove = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		if(isDragging){
			const {
				scrollHeight: contentScrollHeight,
				offsetHeight: contentOffsetHeight,
			} = scrollRef.current;

			console.log('mouse movement delta',(e.clientY - scrollStartPosition));
			
			const computedThumbHeight = (trackRef.current.clientHeight / contentRef.current.clientHeight) * trackRef.current.clientHeight;
			  
			console.log('thumb heights',thumbHeightRef.current,computedThumbHeight);
			
			const deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / computedThumbHeight);
		
			console.log('deltaY',deltaY);
		
			 	  
			const newScrollTop = Math.min(currentScrollTop + deltaY, contentScrollHeight - contentOffsetHeight);
			//console.log(newScrollTop)
			scrollRef.current.scrollTop = newScrollTop;


		}

	}, [isDragging, currentScrollTop, thumbHeightRef]);



	useEffect(() => {
		console.log(' +++ add mouse listeners');
		document.addEventListener('mousemove', handleThumbMouseMove);
		document.addEventListener('mouseup', handleThumbMouseUp);
		document.addEventListener('mouseleave', handleThumbMouseUp);
		return () => {
		  console.log(' --- remove mouse listeners');
		  document.removeEventListener('mousemove', handleThumbMouseMove);
		  document.removeEventListener('mouseup', handleThumbMouseUp);
		  document.removeEventListener('mouseleave', handleThumbMouseUp);
		};
	  }, [handleThumbMouseMove,handleThumbMouseUp]);


	return(
		<div className="glx-scrollbar" style={style} >
			<div className="glx-scrollbar-scroll" ref={scrollRef}>
				<div className="glx-scrollbar-content" ref={contentRef}>
					{children}
				</div>
			</div>

			<div className="glx-track" ref={trackRef} style={{opacity:hidden?'0':'0.3'}} >
				<div className="glx-thumb" 
					 ref={thumbRef} 
					 style={{height:`${thumbHeight}px`, cursor:isDragging?'grab':'pointer'}}
					 onMouseDown={handleThumbMouseDown}>
					<div className="glx-thumb-top">

					</div>
					<div className="glx-thumb-bottom">

					</div>
				</div>
			</div>
		</div>
	);
}

export default GalaxisScrollBar;