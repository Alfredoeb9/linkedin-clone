import React, { useEffect, useState } from 'react';
import "./Feed.css"
import InputOption from './InputOption';
import { Subscriptions, Image, Create, EventNote, CalendarViewDay } from '@mui/icons-material';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Go into firebase database and grab the posts 
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      // Update the post state and return the ID and post data
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )));
    });
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title={'Photo'} color="#70b5F9"/>
          <InputOption Icon={Subscriptions} title={'Video'} color="#E7A33E"/>
          <InputOption Icon={EventNote} title={'Event'} color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDay} title={'Write article'} color="#7FC15E"/>
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
      ))}
      {/* <Post name="Alfredo Barillas" description="This is a test" message="Wow this works"/> */}
    </div>
  )
}

export default Feed;