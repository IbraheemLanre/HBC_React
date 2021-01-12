import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, author, desc, img, link }) => {
  return (
    <div className="BlogCard">
      <h2>{title}</h2>
      <em>{author}</em>
      <p>{desc}</p>
      <img src={img} alt={title} />
      <Link to={link}>Read more</Link>
    </div>
  );
};

export default BlogCard;
