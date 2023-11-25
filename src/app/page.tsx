'use client'
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
  const [users , setUsers] = useState<any>([])
  const handleClick = async() => {
       const response = await fetch("/api/text");
       const data = await response.json();
       console.log(data);

  }
  return (
    <>
    <h1>
      hello world
    </h1>

      <button 
      onClick={handleClick}
      className='text-black border-2 border-black px-4 py-1 rounded-lg' > 
      Get Users 
      </button>

    </>
    
  )
}
