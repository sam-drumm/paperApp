import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ArticleMain from '../../components/ArticleMain'
import ReadersNav from '../../components/ReadersNav'
import Recomendations from '../../components/Recomendations'
import { BlogsiteContext } from '../../context/BlogsiteContext'
const styles = {
  content: 'flex'
}

const Post = () => {
  const router = useRouter()
  const { posts, users } = useContext(BlogsiteContext)
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    if (posts.length === 0) {
      return
    }
    setPost(posts.find(post => post.id === router.query.slug))
    setAuthor(users.find(user => user.id === post.data?.author))
  }, [post])

  return (
    <div className={styles.content}>
      <ReadersNav/>
      <ArticleMain post={post} author={author}/>
      <Recomendations/>
    </div>
  )
}

export default Post
