import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <p>Loading...</p>}
      {!isPending && !error && <Bloglist blogs={blogs} title={"All blogs"} />}
    </div>
  );
};

export default Home;
