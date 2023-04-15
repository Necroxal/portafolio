import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles.js';
import {ComputersCanvas} from './canvas';
import { useState, useEffect } from 'react';


const Hero = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const rotateWord = ['Web Developer', 'Full Stack Developer', 'Software Developer'];
  const [text, settext] = useState('');
  const [delta, setdelta] = useState(300 - Math.random()*100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(()=>{
      tick();
    },delta)
    return () => {clearInterval(ticker)}
  }, [text])
  
  const tick = ()=>{
    let i = loopNum % rotateWord.length;
    let fullText = rotateWord[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length + 1);
    settext(updatedText);

    if(isDeleting){
      setdelta(prevdelta => prevdelta /2)
    }
    if(!isDeleting && updatedText === fullText){
      setisDeleting(true);
      setdelta(period);

    }else if(isDeleting && updatedText === ''){
      setisDeleting(false);
      setloopNum(loopNum+1);
      setdelta(100);
    }
    
    
  }

  return (
    <section className='relative w-full h-screen
    mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'></div>
        <h1 className='text-[60px] font-bold tracking-[0.8px] text-[#ffffff] 
        leading-[1] my-40 mx-10 block'>{`Hello I'm German `}<br></br><br></br><span className=' bg-gradient-to-r from-[#fff] to-[#f704cf] text-transparent bg-clip-text  ' >{text}</span></h1>
      </div>
    </section>
  )
}

export default Hero