import { DateTime } from 'luxon';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PostContainer() {
  const { posts } = useOutletContext();

  return (
    <div className="post-container">
      {posts
        .filter((obj) => obj.isPublished)
        .map((obj) => {
          return (
            <Link to={'/post/' + obj._id} key={obj._id}>
              <div className="post">
                <h2>{obj.title}</h2>
                <p>{obj.text.slice(0, 60)}...</p>
                <p>
                  By {obj.author.first_name} {obj.author.last_name}
                </p>
                <p>
                  Published {DateTime.fromISO(obj.timestamp).toLocaleString(DateTime.DATETIME_MED)}
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default PostContainer;
