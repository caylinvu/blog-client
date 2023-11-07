import { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddComment() {
  const [displayForm, setDisplayForm] = useState(false);
  const { postId } = useParams();

  const cancelComment = () => {
    setDisplayForm(false);
  };

  return (
    <div className="add-comment">
      {displayForm ? (
        <form className="comment-form" action={'/api/posts/' + postId + '/comments'} method="POST">
          <div className="form-group">
            <label htmlFor="display_name">Display Name</label>
            <input type="text" name="display_name" id="display_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="text">Comment</label>
            <input type="text" name="text" id="text" required />
          </div>
          <div className="btn-container">
            <button type="submit" onSubmit={() => setDisplayForm(false)}>
              Submit
            </button>
            <button type="button" onClick={cancelComment}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button className="open-form-btn" type="button" onClick={() => setDisplayForm(true)}>
          Add Comment
        </button>
      )}
    </div>
  );
}

export default AddComment;
