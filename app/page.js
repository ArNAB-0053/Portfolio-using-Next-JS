
'use client'
import Body from '@/Components/Body'
import React from 'react'
import { ThemeProvider } from "next-themes"
import Movestopbtn from '@/Components/Movestopbtn'

const page = () => {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Body />
        <Movestopbtn/>
      </div>

    </ThemeProvider>
  )
}

export default page
