import './styles/App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('https://blog-api-production-7f4c.up.railway.app/api/posts');
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const postData = await response.json();
        setPosts(postData);
        setError(null);
        console.log(postData);
      } catch (err) {
        setError(err.message);
        setPosts(null);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <Outlet context={{ posts }} />
    </>
  );
}

export default App;

// create component for blog posts and include link to individual posts

// add ability to click on and display individual blog post with comments

// add ability to add comments to posts

// set up error/loading screens

// GO BACK AND ENABLE CORS ONLY FOR THIS WEBSITE
