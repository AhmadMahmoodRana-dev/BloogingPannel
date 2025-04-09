import React from 'react'
import darkTheme from '../colors/theme'

const FutureTechFeature = () => {
  return (
    <div style={{backgroundColor:darkTheme.colors.cardBackground}} className='w-full md:min-h-[40vh] min-h-[30vh] h-auto flex justify-center flex-col xl:pl-18 lg:pl-10 pl-4'>
      <button style={{color:darkTheme.colors.textPrimary,borderColor:darkTheme.colors.border}} className='bg-[#333333] px-2 rounded-sm 2xl:w-[12%] xl:w-[15%] lg:w-[18%] md:w-[25%] w-[45%] py-3 mb-4 border-2'>Unlock the Power of</button>
      <h1 style={{color:darkTheme.colors.textPrimary}} className='md:text-6xl text-4xl font-semibold' >Future Tech Features</h1>
    </div>
  )
}

export default FutureTechFeature
