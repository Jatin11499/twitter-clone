import React,{ useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';

function TweetBox() {
    const [ tweetMessage, setTweetMessage ] = useState("");
    const [ tweetImage, setTweetImage ] = useState("");
    const [{user}, dispatch] = useStateValue();

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: user.displayName,
            username: user.email.replace("@gmail.com",""),
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user.photoURL}/>
                    <input 
                        placeholder="What's happening?" 
                        type="text" 
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                    />
                </div>
                <input 
                    className="tweetBox__imageInput" 
                    placeholder="Enter image URL" 
                    type="text" 
                    value={tweetImage} 
                    onChange={e => setTweetImage(e.target.value)}
                />
                <Button 
                    onClick={sendTweet} 
                    className="tweetBox__tweetButton" 
                    type="submit"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
