import React from 'react'
import Image from 'next/image'
import Background from '../public/banner.png'

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
          <h1 className='max-w-xl text-[6rem] font-mediumSerif'>Mole</h1>
          <h3 className='text-2xl'>Aliter homines, aliter philosophos loqui putas oportere?</h3>
          <button className={styles.accentedButton}>Hello</button>
        </div>
        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1'
          src={Background.src}
          alt=''
          height='500'
          width='400'

        />
      </div>
    </div>
  )
}

export default Banner
