import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

const API_URL = "http://localhost:3001/posts/";

const Blog = () => {
  const [title, setTitle] = useState("Hello World!");
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    img: "",
    author: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(API_URL).then((res) => setPosts(res.data));
  }, []);

  const changeTitleHandler = () => {
    let newTitle = prompt("What should be the next title?");
    setTitle(newTitle);
  };

  const changeValueHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const addPosthandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(API_URL, post)
      .then(() => {
        return axios.get(API_URL);
      })
      .then((res) => setPosts(res.data))
      .then(() => setIsLoading(false));
  };

  let postList = undefined;

  if (isLoading) {
    postList = <p>Loading</p>;
  }

  if (!isLoading) {
    postList = (
      <div>
        <h1 onClick={changeTitleHandler}>{title}</h1>
        <div className="posts">
          {posts.map((p) => (
            <div className="post" key={p.id}>
              <img src={p.img} alt={p.title} />
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <p>{p.author}</p>
            </div>
          ))}
        </div>
        <form onSubmit={addPosthandler}>
          <input
            type="text"
            name="title"
            onChange={changeValueHandler}
            placeholder="title"
          />
          <input
            type="text"
            name="desc"
            onChange={changeValueHandler}
            placeholder="desc"
          />
          <input
            type="text"
            name="img"
            onChange={changeValueHandler}
            placeholder="img"
          />
          <input
            type="text"
            name="author"
            onChange={changeValueHandler}
            placeholder="author"
          />
          <button type="submit">send new post</button>
        </form>
      </div>
    );
  }
  return postList;
};
export default Blog;
