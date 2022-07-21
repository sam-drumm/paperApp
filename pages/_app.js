import React from 'react'
import '../styles/globals.css'
import { BlogsiteProvider } from '../context/BlogsiteContext'

function MyApp ({ Component, pageProps }) {
  return (
    <BlogsiteProvider>
      <Component {...pageProps} />
    </BlogsiteProvider>
  )
}

export default MyApp
