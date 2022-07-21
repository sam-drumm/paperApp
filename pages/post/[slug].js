import React from 'react'
import ReadersNav from '../../components/ReadersNav'
import Recomendations from '../../components/Recomendations'
const styles = {
  content: 'flex'
}

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav/>
      <div>Main Article Here</div>
      <Recomendations/>
    </div>
  )
}

export default Post
