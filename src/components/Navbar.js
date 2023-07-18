import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
     <Link to="/">ホーム</Link>
     <Link to="/createpost">記事投稿</Link>
     <Link to="/login">ログイン</Link>
    </nav>
  )
}
