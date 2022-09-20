import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header({location, history}){
    return (
        <header className="header">
            <strong>Header</strong>
            <ul>
                <Link className="header-link" to="/" onClick={(event)=>{
                    history.push("/main");
                }}>Home</Link>
                <Link className="header-link"  to="/profile">프로필</Link>
                <Link className="header-link"  to="/sign">로그인</Link>
                <Link className="header-link"  to="/product/*">상품</Link>
            </ul>
        </header>
    );
}

export default Header;