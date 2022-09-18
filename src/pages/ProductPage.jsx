import React from "react";

// URL Parameter를 이용
import {useParams} from "react-router-dom"; //Use URL Parameters
function ProductPage(){
    const {productId} = useParams();    //Use URL Parameters
    return (
        <>
            <h3>{productId}번 상품 페이지입니다.</h3>
        </>
    );
}

// useLocation을 이용
// import {useParam} from "react-router-dom";
// import {useLocation} from "react-router-dom";   //Use Query string
// function ProductPage(){
//     const productId = useParams().productId;
//     const location = useLocation();
//     return (
//         <>
//             <h3>{productId}번 상품 페이지입니다.</h3>
//             <ul>
//                 <li>hash : {location.hash}</li>
//                 <li>pathname : {location.pathname}</li>
//                 <li>search : {location.search}</li>
//                 <li>state : {location.state}</li>
//                 <li>key : {location.key}</li>
//             </ul>
//         </>
//     );
// }

// useSearchParams를 이용
// import {useParam} from "react-router-dom";
// import {useSearchParams} from "react-router-dom";
// function ProductPage(){
//     const productId = useParams().productId;
//     const keyWords = searchParams;
//     const keyWord = searchParams.get("search");
//     return (
//         <>
//             <h3>{productId}번 상품 페이지입니다.</h3>
//             <ul>
//                 <li>keyWords : {keyWords}</li>
//                 <li>keyWord : {keyWord}</li>
//             </ul>
//         </>
//     );
// }

// useNavigate를 이용
// import {useParam} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

// function ProductPage(){
//     const productId = useParams().productId;
//     const navigate = useNavigate();
//     return (
//         <>
//             <h3>{productId}번 상품 페이지입니다.</h3>
//             <ul>
//                 <li><button onClick={()=>navigate(-2)}>Go 2pages back</button></li>
//                 <li><button onClick={()=>navigate(-1)}>Go back</button></li>
//                 <li><button onClick={()=>navigate(1)}>Go forward</button></li>
//                 <li><button onClick={()=>navigate(2)}>Go 2pages forward</button></li>
//                 <li><button onClick={()=>navigate('/')}>Go Root</button></li>
//                 <li><button onClick={()=>navigate('/', {replace: true})}>Go Root</button></li>
//             </ul>
//         </>
//     );
// }


export default ProductPage;