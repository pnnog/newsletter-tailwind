import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

export const ToogleTheme = () =>{

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches


  const htmlClassList = document.documentElement.classList

  useEffect(()=>{
    !!systemPreference && htmlClassList.add('dark')
  },[])

  const toggle = () =>{
    htmlClassList.toggle('dark')
  }


  return(
    <>
        <SunIcon  className='h-8 text-gray-100 hidden dark:block sm:cursor-pointer' onClick= {toggle}/> 

        <MoonIcon  className='h-8 block dark:hidden text-gray-100 dark sm:cursor-pointer' onClick= {toggle}/>
    </>
  )
}