import React, { useState } from 'react'
import { Fa0, Fa1, Fa2, Fa3, Fa4, Fa5, Fa6, Fa7, Fa8, Fa9 } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { CgMathDivide, CgMathEqual, CgMathMinus } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";
import { TbCircleLetterC } from "react-icons/tb";

function Calculater01() {
  const[input,setInput]=useState('');

  const handleClick=(value)=>{
    setInput(input+value)
  }
const handleEqual=()=>{
  try{
setInput(eval(input));
  }
  catch{
setInput('Error')
  }
}
const handleDelete = () => {
  setInput(input.slice(0, -1));
}
  return (
  <>
  calculator
       <div className='w-full h-screen bg-red-900 flex justify-center items-center'>
        <div className='  bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>
          <div className='w-full p-2 bg-[#171314] inset-shadow-sm inset-shadow-zinc-500 flex justify-start items-center font-extrabold text-red-50 text-xl'>
           <input type="text" value={input} />
          </div>
          
          
          <div className='grid p-4 grid-cols-4 gap-6'>
            <div onClick={()=>setInput()}className='bg-[#171314] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><TbCircleLetterC /></div>
            <div onClick={()=>handleClick('-')} className='bg-[#171314] p-6  inset-shadow-sm  rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><CgMathMinus /></div>
            <div onClick={()=>handleClick('/')} className='bg-[#171314] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><CgMathDivide /></div>
            <div onClick={handleDelete} className='bg-[#171314] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><FiChevronsLeft /></div>


            <div onClick={()=>handleClick('7')} className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-50 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa7 /></div>
            <div onClick={()=>handleClick('8')} className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-50 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa8 /></div>
            <div onClick={()=>handleClick('9')}className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-50 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'> <Fa9 /></div>
            <div onClick={()=>handleClick('*')} className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-50 hover:inset-shadow-red-50 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><FiX /></div>
            
            <div onClick={()=>handleClick('4')}className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'> <Fa4/></div>
            <div onClick={()=>handleClick('5')} className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'> <Fa5 /></div>
            <div onClick={()=>handleClick('6')}  className='bg-[#bf0000] p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa6 /></div>
            <div onClick={()=>handleClick('+')} className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><BsPlus /></div>

            <div onClick={()=>handleClick('1')}  className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa1 /></div>
            <div onClick={()=>handleClick('2')}  className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa2 /></div>
            <div onClick={()=>handleClick('3')}  className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1  flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa3 /></div>
            <div onClick={handleEqual} className='bg-[#bf0000] p-6 row-span-2 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><CgMathEqual /></div>

            <div onClick={()=>handleClick('0')}  className='bg-[#bf0000] col-span-2   p-6 inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'><Fa0 /></div>
            <div className='bg-[#bf0000] p-6  inset-shadow-sm rounded-2xl inset-shadow-zinc-100 hover:inset-shadow-red-50 hover:-translate-1 flex justify-center items-center font-extrabold text-red-50 text-xl'>.</div>
            
          </div>
          </div>
          
       </div>
    </>

  )
}

export default Calculater01
