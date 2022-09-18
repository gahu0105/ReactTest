import React from 'react';
import {Link} from 'react-router-dom';

function Header({location, history}){
    return (
        <header className="header">
            <strong>Header</strong>
            <ul>
                <p>
                    <Link to="/" onClick={(event)=>{
                        history.push("/main");
                    }}>Home</Link>
                    {/* <button onClick={(event)=>{
                        history.push('/main');
                        // <Link to="/"></Link>
                    }}>Home</button> */}
                </p>
                <p>
                    <Link to="/profile">프로필</Link>
                </p>
                <p>
                    <Link to="/sign">로그인</Link>
                </p>
                <p>
                    <Link to="/product/*">상품</Link>
                </p>
            </ul>
        </header>
    );
}

export default Header;