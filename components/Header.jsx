import React, { useContext } from 'react'

import Image from 'next/image'
import Logo from '../public/logo.png'
import { BlogsiteContext } from '../context/BlogsiteContext'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PostModal from './PostModal'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: 0,
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(10,11,15,0.75)'
  }
}

const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
  content: 'max-w-7xl flex-1 flex justify-between gap-10',
  logoContainer: 'flex items-center flex-start',
  logo: 'cursor-pointer object-contain',
  bannerNav: 'flex cursor-pointer items-center space-x-5',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () => {
  const router = useRouter()
  const { handleUserAuth, currentUser } = useContext(BlogsiteContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={Logo}
            alt='logo image'
            height={40}
            width={200}
          />
        </div>
        {currentUser
          ? (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <Link
              href={'/?addNew=1'}>
              <div className={styles.accentedButton}>Blog</div>
            </Link>
            <div className={styles.accentedButton}>Pay me</div>
          </div>)
          : (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <div className={styles.accentedButton}>Get Started</div>
            <div onClick={handleUserAuth}>Sign In</div>
          </div>)
        }

      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push('./')}
        style={customStyles}
      >
        <PostModal/>
      </Modal>
    </div>
  )
}

export default Header
