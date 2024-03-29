import React from 'react'
import { getSortedPostsData } from '@/lib/Post'
import ListItem from './ListItem'

function Posts() {
    const posts=getSortedPostsData()
  return (
   <section className='mt-6 mx-auto max-w-2xl'>
    <h2 className='text-4xl font-bold dark:text-white/90'>
    Blog
    </h2>
    <ul className='w-fulll'>
        {posts.map((post)=>{
           return <ListItem key={post.id} post={post}/>}
            )
        }
    </ul>
   </section>
  )
}

export default Posts
