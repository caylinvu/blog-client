import { DateTime } from 'luxon';
import { useParams, useOutletContext } from 'react-router-dom';

function PostDetail() {
  const { posts } = useOutletContext();
  const { postId } = useParams();

  return (
    <>
      <h1>This is some post detail for id {postId}</h1>
    </>
  );
}

export default PostDetail;
