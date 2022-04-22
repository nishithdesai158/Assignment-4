import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Post from "./Post";
import axios from 'axios';

function PostDetails(props) {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({})

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/post/${postId}`, {
            headers: {
                "app-id": "61959c11c8855080728e076e"
            }
        }).then((res) => {
            console.log({
                Data: res
            });
            setPostDetails((oldState) => res.data)
        })
        // return fetch(, {

        // }).then(data => {
        //     data.json().then(p => {
        //         setPostDetails(oldState => {
        //             return p.data
        //         })
        //     })
        // })
    }, [postId])


    return (
        <div className="post-details-container">
            {
                postDetails ? <Post postData={postDetails}></Post> : ""
            }
        </div>
    )
}

export default PostDetails;