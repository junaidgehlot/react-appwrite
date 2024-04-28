import { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import { Container, PostCard } from "../../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPost([])
      .then((posts) => setPosts(posts?.documents || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AllPosts;
