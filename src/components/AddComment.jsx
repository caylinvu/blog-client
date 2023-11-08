import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

function AddComment() {
  const [displayName, setDisplayName] = useState('');
  const [text, setText] = useState('');
  const [displayForm, setDisplayForm] = useState(false);
  const { postId } = useParams();
  const { updateComments, setUpdateComments } = useOutletContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://blog-api-production-7f4c.up.railway.app/api/posts/' + postId + '/comments',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: text,
            display_name: displayName,
          }),
        },
      );
      if (response.status === 200) {
        setDisplayName('');
        setText('');
        setDisplayForm(false);
        setUpdateComments(!updateComments);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setDisplayName('');
    setText('');
    setDisplayForm(false);
  };

  return (
    <div className="add-comment">
      {displayForm ? (
        <form onSubmit={handleSubmit} className="comment-form">
          <div className="form-group">
            <label htmlFor="display_name">
              Display Name <span>(numbers and letters only)</span>
            </label>
            <input
              type="text"
              name="display_name"
              id="display_name"
              pattern="[a-zA-Z0-9]+"
              maxLength={30}
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Comment</label>
            <input
              type="text"
              name="text"
              id="text"
              maxLength={500}
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="btn-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
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
