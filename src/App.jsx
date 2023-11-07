import './styles/App.css';
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

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
      <div className="post-container">
        {posts
          .filter((obj) => obj.isPublished)
          .map((obj) => {
            return (
              <div key={obj._id} className="post">
                <h2>{obj.title}</h2>
                <p>{obj.text.slice(0, 60)}...</p>
                <p>
                  By {obj.author_id.first_name} {obj.author_id.last_name}
                </p>
                <p>
                  Published {DateTime.fromISO(obj.timestamp).toLocaleString(DateTime.DATETIME_MED)}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;

// change all instances of author_id to author and post_id to post

// GO BACK AND ENABLE CORS ONLY FOR THIS WEBSITE
