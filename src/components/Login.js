import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth, provider} from '../firebase';
import { useNavigate } from 'react-router-dom';


export default function Login({setIsAuth}) {

  //リダイレクト処理
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      //ローカルストレージへログイン情報を保存
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
      console.log(result)
      navigate("/")
    });
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}
