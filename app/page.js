
'use client'
import Body from '@/Components/Body'
import React, { useEffect } from 'react'
import { ThemeProvider } from "next-themes"


const page = () => {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Body />  
        {/* <Cursor/>      */}
      </div>
    </ThemeProvider>
  )
}

export default page
