import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'

const styles = {
  wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
  authorContainer: 'flex gap-[.4rem]',
  authorImageContainer: 'grid place-items-centre rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  authorImage: 'object-cover',
  authorName: 'font-semibold',
  title: 'font-bold text-2xl',
  briefing: 'text-[#787878]',
  articleDetails: 'my-2 text-[.8rem]',
  category: 'bg-[#F2F3F2] p-1 rounded-full',
  detailsContainer: 'flex items-centre justify-between text-[]6 ',
  bookmarkContainer: 'cursor-pointer',
  postDetails: 'flex-[2.5] flex flex-col',
  thumbnailContainer: ''
}

const PostCard = () => {
  return (
    <>
      <Link href={'/post/123'}>
        <div className={styles.wrapper}>
          <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
              <div className={styles.authorImageContainer}>
                <Image
                  className={styles.authorImage}
                  src={Logo}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.authorName}>Sam Drumm</div>
            </div>
            <h1 className={styles.title}>101 ways to fend off doom!</h1>
            <div className={styles.briefing}>You can learn to survive</div>
            <div className={styles.detailsContainer}>
              <span className={styles.articleDetails}>Jan 06 • 6 min read • <span className={styles.category}>survivial</span></span>
              <span className={styles.bookmarkContainer}><FiBookmark className='w-5, h-5'/></span>
            </div>
          </div>

          <div className={styles.thumbnailContainer}>
            <Image
              height={100}
              width={100}
              src={Logo}
              alt=''
            />
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostCard
