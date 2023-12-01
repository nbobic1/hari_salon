"use client"
import Image from 'next/image'
import { useState,memo } from 'react';

export default function Home() {
  const [coun, setCoun] = useState(0);
  console.log(coun)
  return (
    <div className='bg-neutral-100 w-full h-full'>
      dasfadfa
      <br></br>
      <button className='bg-white p-3 shadow-a rounded-md' onClick={()=>{
        setCoun(ar=>ar+1);
      }}>sdfsf</button>
      <br></br>
      <Dugme click={()=>{
        console.log('#',coun)
      }}></Dugme>
    </div>
  )
}
const Dugme=memo(({click}:{click:any})=>{
  return <button onClick={click}>gori</button>
})