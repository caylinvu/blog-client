import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

function Post({ posts }) {
  return (
    <div className="post-container">
      {posts
        .filter((obj) => obj.isPublished)
        .map((obj) => {
          return (
            <div key={obj._id} className="post">
              <h2>{obj.title}</h2>
              <p>{obj.text.slice(0, 60)}...</p>
              <p>
                By {obj.author.first_name} {obj.author.last_name}
              </p>
              <p>
                Published {DateTime.fromISO(obj.timestamp).toLocaleString(DateTime.DATETIME_MED)}
              </p>
            </div>
          );
        })}
    </div>
  );
}

Post.propTypes = {
  posts: PropTypes.array,
};

export default Post;
