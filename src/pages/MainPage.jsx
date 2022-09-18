import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

function MainPage(props){
    return (
        <>
            <div className="main">메인 페이지</div>
            <ul>
                <Link to="product/1"><li>1번상품</li></Link>
                <Link to="product/2"><li>2번상품</li></Link>
            </ul>
        </>
    );
}

export default MainPage;