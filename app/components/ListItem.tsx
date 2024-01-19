import React from 'react'
import GetFormattedDate from '../../lib/GetFormattedDate'
import Link from 'next/link'

type Props = {
    post:BlogPost
}

export default function ListItem({post}: Props) {
    const {id,title,date}=post
    const formattedDate=GetFormattedDate(date)
  return (
    <li>
        <Link className='underline hover:text-black/70 dark:hover:text-white/90' href={`/posts/${id}`}>{title}</Link>
    <br/>
    <p className='text-sm mt-2'>{formattedDate}</p>
    </li>
  )
}