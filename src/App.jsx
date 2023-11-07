import './styles/App.css';
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('https://blog-api-production-7f4c.up.railway.app/api/posts');
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const postData = await response.json();
        setPosts(postData);
        console.log(postData);
      } catch (err) {
        setPosts([]);
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <Link to="/">
        <h1 className="header-txt">Blog4Cats</h1>
      </Link>
      <Outlet context={{ posts }} />
    </>
  );
}

export default App;

// add ability to click on and display individual blog post with comments

// add ability to add comments to posts

// GO BACK AND ENABLE CORS ONLY FOR THIS WEBSITE
