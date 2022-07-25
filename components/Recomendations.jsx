import React, from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'

import ReplitLogo from '../public/replit.png'
import TutorialImage from '../public/tutorial.jpg'
import CPLogo from '../public/tutorial.jpg'
import Qazi from '../public/qazi.jpg'
import JSLogo from '../public/jsLogo.png'

const Recommendations = ({ author }) => {
  

  const styles = {
    wrapper: 'h-screen m-width-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer: 'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem} w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing: 'text-[#787878]',
    authorActions: 'flex gap-[.6rem] my-[1rem]',
    actionButton: 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recommendationAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationTitle: 'font-bold',
    articlesContainer: 'flex-[4]',
    recommendationAuthorName: 'text-sm',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
    recommendationThumbnail: 'object-cover',
    articleContentWrapper: 'flex item-center justify-between cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]'

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Join now</div>
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
        <div className={styles.recommendationsTitle}>More from Medium</div>
        <div className={styles.articlesContainer}>

          {recommendedPosts.map(post => (

            <div className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>

                <div className={styles.recommendationAuthorContainer}>
                  <div className={styles.recommendationAuthorProfileImageContainer}>
                    <Image
                      src={post.author.image}
                      height={100}
                      width={100}
                      alt=''
                    />
                  </div>
                  <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>

              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  className={styles.recommendationThumbnail}
                  src={post.image}
                  height={100}
                  width={100}
                  alt=''
                />
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
  {
    title: 'How to look cool when you\'re poor',
    image: ReplitLogo,
    author: {
      name: 'Mole Jones',
      image: CPLogo
    }
  },
  {
    title: 'How to get a tax cut when you\'re rich',
    image: TutorialImage,
    author: {
      name: 'Carmen Sandiago',
      image: Qazi
    }
  },
  {
    title: 'You can grow your own food when you run out!',
    image: JSLogo,
    author: {
      name: 'Ayn Rand',
      image: CPLogo
    }
  }
]
