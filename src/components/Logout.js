import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import {auth, provider} from '../firebase';
import { useNavigate } from 'react-router-dom';


export default function Logout({setIsAuth}) {

  //遷移先を指定できる処理を用意
  const navigate = useNavigate();

  const logout = () => {

    //ログアウト
    signOut(auth).then(() => {
      //ローカルストレージクリア
      localStorage.clear();
      setIsAuth(false);
      navigate("/login")
    })
  }

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}
