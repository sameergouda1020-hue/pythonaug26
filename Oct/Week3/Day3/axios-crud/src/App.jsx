import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(API).then((res) => {
      setPosts(res.data.slice(0, 10));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = { title, body, userId: 1 };

    if (editId !== null) {
      axios.put(`${API}/${editId}`, newPost).then((res) => {
        setPosts(
          posts.map((post) =>
            post.id === editId ? { ...res.data, id: editId } : post
          )
        );
        setEditId(null);
        setTitle("");
        setBody("");
      });
    } else {
      axios.post(API, newPost).then((res) => {
        setPosts([{ ...res.data }, ...posts]);
        setTitle("");
        setBody("");
      });
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
  };

  const handleDelete = (id) => {
    axios.delete(`${API}/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Axios CRUD Operations</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button type="submit">
          {editId !== null ? "Update Post" : "Add Post"}
        </button>
      </form>

      <h2>All Posts</h2>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <button onClick={() => handleEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;