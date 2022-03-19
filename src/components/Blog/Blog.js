import React from 'react';
import "./Blog.css"
const Blog = (props) => {
    return (
      <div className="blog-3">
        <h1>Blog </h1>
            <p> { props.name} </p>
            <p> <small>{ props.job}</small> </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          cupiditate ipsum, quibusdam dicta esse delectus.
        </p>
      </div>
    );
};

export default Blog;