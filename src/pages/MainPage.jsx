import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { Item, Button } from "semantic-ui-react";
import Header from '../components/Header';

const DEF_WELCOME = "WELCOME";
const DEF_READ = "READ";
const DEF_UPDATE = "UPDATE";
const DEF_CREATE = "CREATE";

function Article(props) {
  return <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
}

function Welcom(props) {
  // <header title="Web-React">Welcome</header>
  return <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
}

function Nav(props) {
  const ItemList = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    ItemList.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return <nav>
      <ol>{ItemList}</ol>
    </nav>
}

function Create(props) {
  return <article>
      <h2>Create</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Apply"></input></p>
      </form>
    </article>
}

function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
      <h2>Update</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={(event)=>{
          console.log(event.target.value);
          setTitle(event.target.value);
        }}></input></p>
        <p><textarea name="body" placeholder="body" value={body} onChange={(event)=>{
          setBody(event.target.value);}}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
}

function ItemList(props){
  const Items = props.arr.map((it)=>(
    <Button>{it.title}</Button>
  ));
  return Items;
}

function MainPage(props){

    const [mode, setMode] = useState(DEF_WELCOME);
    const [id, setID] = useState(null);
    const [nextID, setNextID] = useState(4);
    const [topics, setTopics] = useState([
      { id: 1, title: "Html", body: "Html is ..." },
      { id: 2, title: "CSS", body: "CSS is ..." },
      { id: 3, title: "Javascript", body: "Javascript is ..." },
    ]);
  
    let content = null;
    let contextControl = null;
  
    if (mode === DEF_WELCOME) {
      content = <Article title="Welcome" body="Hello Web-Dev" />;
      contextControl = <p><input type="submit" value="Create" onClick={(event)=>{
        event.preventDefault();
        setMode(DEF_CREATE);
      }}></input></p>
    }
    else if (mode === DEF_READ) {
      let title, body = null;
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id == id) {
          title = topics[i].title;
          body = topics[i].body;
        }
      }

      content = <Article title={title} body={body} />
      contextControl = <>
        {/* <li><a href={"/update/" + id} onClick={(event)=>{
          event.preventDefault();
          setMode(DEF_UPDATE);
        }}>Update</a></li> */}
        <p><input type="submit" value="Update" onClick={(event)=>{
          event.preventDefault();
          setMode(DEF_UPDATE);
        }}></input></p>
  
        <p><input type="submit" value="Delete" onClick={(event)=>{
          const newTopics = [];
          for (let i=0; i<topics.length; i++){
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode(DEF_WELCOME);
        }}></input></p>
        <p><input type="submit" value="Create" onClick={(event)=>{
          event.preventDefault();
          setMode(DEF_CREATE);
        }}></input></p>
  
      </>
    }
    else if (mode === DEF_CREATE) {
      content = <Create onCreate={(_title, _body) => {
            const newTopic = { id: nextID, title: _title, body: _body };
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode(DEF_READ);
            setID(nextID);
            setNextID(nextID + 1);
          }}>
          </Create>
    }
    else if (mode === DEF_UPDATE) {
      let title, body = null;
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id === id) {
          title = topics[i].title;
          body = topics[i].body;
        }
      }
      content = <Update title={title} body={body} onUpdate={(_title, _body) => {
            console.log("new[%s,%s]", _title, _body);
            const newTopics = [...topics];
            const updateTopic = { id: id, title: _title, body: _body };
            for (let i = 0; i < newTopics.length; i++) {
              if (newTopics[i].id === id) {
                newTopics[i] = updateTopic;
                break;
              }
            }
            setTopics(newTopics);
            setMode(DEF_READ);
          }}
        ></Update>
    }
    
    const TitleList = [];
    for(let i = 0; i<topics.length; i++){
      TitleList.push(topics[i].title);
    }
  
    return (
        <div>
            <div className="main">메인 페이지</div>
            <ul>
                <Link to="product/1"><li>1번상품</li></Link>
                <Link to="product/2"><li>2번상품</li></Link>
            </ul>
            <Welcom title="Web-React" onChangeMode={() => {
                  setMode(DEF_WELCOME); }}></Welcom>
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode(DEF_READ);
                setID(_id);
                }}></Nav>
              {content}

            <ul>
                {contextControl}
            </ul>
            <ul>
                <h2>Map을 이용한 Button 그리기</h2>
                <ItemList arr={topics}/>
            </ul>
        </div>
    );
}

export default MainPage;