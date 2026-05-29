import React from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from './Posts'
import axios from 'axios'

const CreatePost = () => {
    
    const navigator = useNavigate()
    
    const handleSubmit = async (e) => {
        // Page won't reload after form submittion
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res) => {
            navigator("/post")
        })
        .catch((err)=>{
            console.log(err)
            alert("Error creating post")
        })
    }

  return (
    <section className='h-full w-[90%] flex flex-col items-center justify-center mx-auto'>
        
        <h1 className='text-4xl font-bold p-5'>Create Post</h1>
        
        <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center bg-white text-black p-5 rounded-2xl shadow-4xs shadow-white'>

            <input type='file' name='image' accept='image/*' />
            <input type='text' name='caption' placeholder='Write image caption' required />
            <button 
            className='btn bg-black text-white active:scale-95 '
            type='submit'>
                Submit
            </button>

        </form>
    </section>
  )
}

export default CreatePost