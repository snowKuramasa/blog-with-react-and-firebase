import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <nav>
     <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        ログイン
      </Link>
    </nav>
  )
}
