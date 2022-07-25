import React, { useContext } from 'react'

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
  logo: 'cursor-pointer object-contain font-PermanentMarker text-4xl',
  bannerNav: 'flex cursor-pointer items-center space-x-5',
  accentedButton: 'rounded bg-black text-white py-2 px-4 rounded-full '
}

const Header = () => {
  const router = useRouter()
  const { handleUserAuth, currentUser } = useContext(BlogsiteContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <heading className={styles.logo}>
            Paper App
          </heading>
        </div>
        {currentUser
          ? (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <Link
              href={'/?addNew=1'}>
              <div className={styles.accentedButton}>Blog</div>
            </Link>
            <button className={styles.accentedButton}>Pay me</button>
          </div>)
          : (<div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Membership</div>
            <button>Get Started</button>
            <div className={styles.accentedButton} onClick={handleUserAuth}>Sign In</div>
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
