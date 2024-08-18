import React from 'react'
import { Button } from "@/components/ui/button"

const HomeView = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
       <h1 className="text-3xl font-bold underline text-red-200">
        Hello world!
      </h1>
      <Button>Click me</Button>
    </div>
  )
}

export default HomeView
