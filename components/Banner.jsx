import React from 'react'
import Image from 'next/image'
import Scribble from '../public/scribble3.png'

const Banner = () => {
  const styles = {
    accentedButton: 'bg-black text-white py-2 px-4 rounded',
    content: 'max-w-7xl flex items-center justify-between',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg[#FCC017] border-y border-black'
  }
  return (

    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-3'>
          <h1 className='max-w-xl text-[6rem] font-mediumSerif'>Paper App</h1>
          <h3 className='text-2xl'>Share your voice with the world.</h3>
          <button className={styles.accentedButton}>Get Started</button>
        </div>
        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={Scribble.src}
          alt=''
          height='500'
          width='400'
        />
      </div>
    </div>

  )
}

export default Banner
