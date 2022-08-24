import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Post from "./Post";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">My Blog</h2>
      <Post posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalPost={post.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
