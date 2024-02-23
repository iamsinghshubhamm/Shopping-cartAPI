import React, { useEffect, useState } from 'react'
import {DotLoader} from 'react-spinners'
import Product from './Product'

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products'
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            const data = await res.json()
            setPosts(data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex justify-center items-center '>
            {
                loading ? <DotLoader color="#36d7b7" /> : posts.length > 0 ?
                    (<div className='flex flex-wrap justify-center items-center'>
                        {
                            posts.map((post) => {
                               return <Product key={post.id} post={post} />
                            })
                        }
                    </div>) :
                    (<div>
                        <p>No Data Found</p>
                    </div>)
            }
        </div>
    )
}

export default Home
