import React, { useEffect, useState } from 'react'
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase"

function Home() {

  const [postList,setPostList] = useState([])

  //マウント時に発火(第二引数に空配列渡すとマウント時になる)
  useEffect (() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db,"posts"))
      // console.log(data)
      // console.log(data.docs)
      // console.log(data.docs.map((doc) => ({doc})))
      // //スプレッド構文で展開し、fireStoreのdata()で階層深くの値を取得
      // //別途idプロパティを追加し、スプレッド構文で展開した中のidをセット
      // console.log(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})))
      setPostList(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})))
    }
    getPosts()
  }, [])


  return (
    <div className='homePage'>
      {postList.map((post)=> {
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='postTextContainer'>
              {post.postText}
            </div>
            <div className='nameAndDeleteButton'>
              <h3>{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        )
      })}
      
    </div>

  )
}

export default Home