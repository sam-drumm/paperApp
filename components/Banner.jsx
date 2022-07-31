import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Scribble from '../public/scribble3.png'
import { BlogsiteContext } from '../context/BlogsiteContext'

const Banner = () => {
  const styles = {
    accentedButton: 'bg-[#231651] text-white py-2 px-4 rounded',
    content: 'max-w-7xl flex items-center justify-between',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#4DCCBD] border-y border-[#231651] text-[#231651]'
  }
  const {
    handleUserAuth, currentUser
  } = useContext(BlogsiteContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-3'>
          <h1 className='max-w-xl text-[7rem] font-PermanentMarker'>Paper App</h1>
          <h3 className='text-2xl text-white'>Share your voice with the world.</h3>
          {currentUser
            ? (
              <Link
                href={'/?addNew=1'}>
                <button className={styles.accentedButton}>Blog</button>
              </Link>
            )
            : (
              <button className={styles.accentedButton} onClick={handleUserAuth}>Sign up</button>
            )
          }

        </div>
        <Image
          className='hidden h-32 md:inline-flex object-contain flex-1 invisible md:visible invert'
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
