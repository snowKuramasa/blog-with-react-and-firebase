import React, { useEffect } from 'react'
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase"

function Home() {

  //マウント時に発火(第二引数に空配列渡すとマウント時になる)
  useEffect (() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db,"posts"))
      console.log(data)
      console.log(data.docs)
      console.log(data.docs.map((doc) => ({doc})))
      //スプレッド構文で展開し、fireStoreのdata()で階層深くの値を取得
      //別途idプロパティを追加し、スプレッド構文で展開した中のidをセット
      console.log(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})))
    }
    getPosts()
  }, [])


  return (
    <div className='homePage'>
      <div className='postContents'>
        <div className='postHeader'>
          <h1>タイトル</h1>
        </div>
        <div className='postTextContainer'>
          今はReactの学習中です。これから頑張ってReactエンジニアとして活躍していきたいと思っています。よろしくお願いします。
        </div>
        <div className='nameAndDeleteButton'>
          <h3>@kuramasa</h3>
          <button>削除</button>
        </div>
      </div>
    </div>

  )
}

export default Home