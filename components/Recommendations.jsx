import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import { BlogsiteContext } from '../context/BlogsiteContext'
import RecommendationCard from './RecommendationCard'

const Recommendations = ({ author }) => {
  const { posts, handleUserAuth, currentUser } = useContext(BlogsiteContext)

  const styles = {
    wrapper: 'h-full m-width-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] bg-[#4dccbd]',
    accentedButton: 'flex items-center justify-center text-sm text-white my-[2rem] py-[.6rem] rounded-full cursor-pointer bg-[#231651]',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border border-[#231651] px-[1rem] rounded-full bg-white text-[#231651]',
    searchInput: 'border-none outline-none w-full',
    authorContainer: 'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem} w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem] mt-[1rem] text-white',
    authorFollowing: 'text-[#787878]',
    authorActions: 'flex gap-[.6rem] my-[1rem]',
    actionButton: 'bg-[#231651] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recommendationAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationTitle: 'font-bold text-white',

    articlesContainer: 'flex-[4]',
    recommendationList: 'flex flex-col gap-3 p-1 sm:grid-cols-2 md:gap-6 md:p-3 lg:grid-cols-3',

    recommendationAuthorName: 'text-sm',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
    recommendationThumbnail: 'object-cover',
    articleContent: 'flex-[4]'
  }

  return (
    <div className={styles.wrapper}>
      {currentUser
        ? (
          <div className={styles.accentedButton} onClick={handleUserAuth}>Blog</div>
        )
        : (
          <Link
            href={'/?addNew=1'}>
            <div className={styles.accentedButton}>Blog</div>
          </Link>
        )
      }

      <div className={styles.searchBar}>
        <AiOutlineSearch/>
        <input
          className={styles.searchInput}
          placeholder='Search'
          type='text'
        />
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
            alt=''
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>{author?.data?.name}</div>
        <div className={styles.authorFollowing}>1b followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}><MdMarkEmailUnread/></button>
        </div>
      </div>

      <div className={styles.recommendationsContainer}>
        <div className={styles.recommendationTitle}>More from Paper App</div>

        <div className={styles.articlesContainer}>
          <div className={styles.recommendationList}>
            {posts.slice(-3).map(post => (
              <RecommendationCard post={post} key={post.id} />
            ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Recommendations
