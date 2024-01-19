import React from 'react'
import { getSortedPostsData,getPostData} from '@/lib/Post'
import GetFormattedDate from '@/lib/GetFormattedDate'
import {notFound} from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams(){
    const posts=getSortedPostsData()
    return posts.map((post)=>({
        postId:post.id
    }))
}
export  function generateMetaData({params}:{params:{postId:string}}){
    const posts=getSortedPostsData()
    const {postId}=params
    const post=posts.find(post=>post.id===postId)
    if(!post){
        return {
            title:'Post Not Found'
        }
    }
    return {
        title:post.title
    }
}

export default async function Page({params}:{params:{postId:string}}) {
    const posts=getSortedPostsData() //dedpued
    const {postId}=params
    if(!posts.find(post=>post.id===postId)){return notFound()};
    const {title,date,contentHtml}=await getPostData(postId)
    const pubDate=GetFormattedDate(date)
  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
        <p className='mt-0'>
            {pubDate}
        </p>
        <article>
            <section dangerouslySetInnerHTML={{__html:contentHtml}}>
            </section>
            <p>
                <Link href='/'>⬅ Back to home</Link>
            </p>
        </article>
    </main>
  )
}
