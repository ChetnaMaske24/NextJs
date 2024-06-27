"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>router.push("./")}>Go to Home Page</button>
      {/* <Link href='./about'>I'm About Page</Link> */}
    </div>
  )
}

export default About;




