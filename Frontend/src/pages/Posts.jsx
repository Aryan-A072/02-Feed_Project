import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {

  const [post, setPost] = useState([])
// {
//     _id: "1",
//     image: "https://ik.imagekit.io/hgze4qowl/image_Nw-ETVoPs.jpg",
//     caption: "This is Card Image 1"
// }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/posts`)
        .then((res) => {

            setPost(res.data.posts)

        })
    }, [])

  return (
    <section className='h-full overflow-auto w-full flex flex-col items-center justify-start gap-5 p-5 py-15'>
        {
            post.length > 0 ? (
                post.map( (posts) => (
                    <div key={posts._id}
                    className='w-75 flex flex-col font-semibold justify-center bg-[#1c1c1c] p-2 rounded'>
                        <img src={posts.image} />
                        <p className='text-center'>{posts.caption}</p>
                    </div>
                ))
            ) : (
                <h1 className='text-4xl font-bold p-5 text-white'>No posts available</h1>
            )
        }
    </section>
  )
}

export default Posts