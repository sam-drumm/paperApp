import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiBookmark } from 'react-icons/fi'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import capsFirst from './utils/capsFirst'

const styles = {
  wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
  authorContainer: 'flex gap-[.6rem] p-1',
  authorImageContainer: 'grid place-items-centre rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
  authorImage: 'object-cover',
  authorName: 'font-semibold text-sm',
  title: 'font-bold text-[1.25rem] font-PermanentMarker text-[#231651]',
  briefing: 'text-[#787878] text-[.8rem]',
  articleDetails: 'my-2 text-[.6rem]',
  category: 'bg-[#d6fff6] p-1 rounded border border-[#231651]',
  detailsContainer: 'flex items-centre justify-between text-[6] ',
  bookmarkContainer: 'cursor-pointer',
  postDetails: 'flex-[2.5] flex flex-col',
  thumbnailContainer: 'flex-[1] flex rounded-md'
}

const RecommendationCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null)

  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        (await getDoc(doc(db, 'users', post.data.author))).data()
      )
    }
    getAuthorData()
  }, [post])

  return (
    <Link href={`./${post.id}`}>
      <div className='noteList-item'>
        <div className={styles.wrapper}>
          <div className={styles.postDetails}>
            <h1 className={styles.title}>{capsFirst(post.data.title)}</h1>
            <div className={styles.briefing}>{post.data.brief}</div>
            <div className={styles.authorContainer}>
              <div className={styles.authorImageContainer}>
                <Image
                  className={styles.authorImage}
                  src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                  alt=''
                  width={40}
                  height={40}
                />
              </div>
              <div className={styles.authorName}>{authorData?.name}</div>
            </div>
            <div className={styles.detailsContainer}>
              <span className={styles.articleDetails}>
                {new Date(post.data.postedOn).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'short'
                })}
                • {post.data.postLength} min read • <span className={styles.category}>{capsFirst(post.data.category)}</span></span>
              <span className={styles.bookmarkContainer}><FiBookmark className='w-5, h-5'/></span>
            </div>

          </div>
          <div className={styles.thumbnailContainer}>
            <Image
              height={100}
              width={100}
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              alt='Stalk(animal) with head under the water'
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecommendationCard
