// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ recentPosts }) => {
  return (
    <div className='sidebar'>
      <h2>Recent Posts</h2>
      <ul>
        {recentPosts.map((post, index) => (
          <li key={index}>
            <a href={post.link}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
