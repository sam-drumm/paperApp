import React, { useContext } from 'react'
import Image from 'next/image'
import { HiOutlineHome, HiLogin } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import { BlogsiteContext } from '../context/BlogsiteContext'
import Link from 'next/link'

const styles = {
  logoContainer: 'cursor-pointer',
  wrapper: 'w-[5rem] h-f flex flex-col justify-between items-center p-[1rem] bg-[#4dccbd]',
  iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
  divider: 'border-b',
  profileImage: 'object-cover',
  profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center',
  accentedButton: 'bg-[#231651] text-white py-2 px-4 rounded-full cursor-pointer ',
  standardButton: 'py-2 px-4 rounded-full cursor-pointer text-white',
  logo: 'cursor-pointer object-contain font-PermanentMarker text-1xl text-[#231651]'
}

const ReadersNav = () => {
  const { currentUser, handleUserAuth } = useContext(BlogsiteContext)

  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>
            Paper App
          </h1>
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

        {currentUser ? (
          <Link
            href={'/?addNew=1'}>
            <div className={styles.accentedButton}>
              <BsPencilSquare/>
            </div>
          </Link>
        )
          : (

            <div className={styles.accentedButton} onClick={handleUserAuth}>
              <HiLogin/>
            </div>

          )}
      </div>

      {currentUser
        ? (
          <div className={styles.profileImageContainer}>
            <Image
              className={styles.profileImage}
              src={`https://res.cloudinary.com/demo/image/fetch/${currentUser?.photoURL}`}
              height={40}
              width={40}
            />
          </div>
        )
        : (
          null
        )
      }
    </div>
  )
}

export default ReadersNav
