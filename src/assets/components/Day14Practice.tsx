import React, { useState } from "react";

function CreatePost(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        const postData = {
            title,
            body,
            userId: 1
        };
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => {
            alert("Post Submitted successfully!");
            setTitle("");
            setBody("");
        })
    }
    return (
        <>
          <h1>Create Post</h1>
      
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
      
            <textarea
              placeholder="Body"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
      
            <button type="submit">Submit</button>
          </form>
        </>
      );
}
export default CreatePost;