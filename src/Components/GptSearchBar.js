import React from 'react'
import { BG_URL } from '../Utils/Constants'
import { useSelector } from 'react-redux'
import lang from '../Utils/languageConstants'

const GptSearchBar = () => {
  const language = useSelector(store => store?.config?.language);
  return (
    <div className='flex justify-center '>
      <img src={BG_URL} alt="BG URL"></img>
      <form className='bg-black w-1/2 grid grid-cols-12 mt-[8%] z-99 absolute'>
        <input type='text' placeholder={lang[language].gptSearchPlaceholder} className='p-4 m-4 col-span-10'></input>
        <button className=' m-4 bg-red-700 text-white rounded-lg col-span-2'>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar