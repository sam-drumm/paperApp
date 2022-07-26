import React, { useContext } from 'react'
import Image from 'next/image'
import SmallLogo from '../public/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import { BlogsiteContext } from '../context/BlogsiteContext'
import Link from 'next/link'

const styles = {
  logoContainer: 'cursor-pointer',
  wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
  iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
  divider: 'border-b',
  profileImage: 'object-cover',
  profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full cursor-pointer',
  standardButton: 'py-2 px-4 rounded-full cursor-pointer',
  logo: 'cursor-pointer object-contain font-PermanentMarker text-1xl'
}

const ReadersNav = () => {
  const { currentUser } = useContext(BlogsiteContext)

  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <heading className={styles.logo}>
            Paper App
          </heading>
        </div>
      </Link>
      <div className={styles.iconsContainer}>

        <Link
          href={'/'}>
          <div className={styles.standardButton}>
            <HiOutlineHome/>
          </div>
        </Link>

        <div className={styles.standardButton}>
          <FiBell/>
        </div>

        <div className={styles.standardButton}>
          <BiBookmarks/>
        </div>

        <div className={styles.standardButton}>
          <RiArticleLine/>
        </div>

        <div className={styles.divider} />
        <Link
          href={'/?addNew=1'}>
          <div className={styles.accentedButton}>
            <BsPencilSquare/>
          </div>
        </Link>
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL}`}
          height={40}
          width={40}
        />
      </div>
    </div>
  )
}

export default ReadersNav
