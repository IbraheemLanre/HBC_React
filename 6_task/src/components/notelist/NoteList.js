import { React, useState, useEffect } from "react";
import axios from "axios";

const NoteList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:3001/notes")
        .then((res) => setPosts(res.data)),
    []
  );

  return (
    <div>
      <h2>Note lists will be here</h2>
      <ul>
        {posts.map((p) => (
          <li>
            {p.firstname} {p.lastname} {p.phoneNumber}{" "}
            <strong>{p.message}</strong> <em>{p.role}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
