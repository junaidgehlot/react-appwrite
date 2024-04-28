import { useEffect, useState } from "react";
import appwriteService from "../../appwrite/config";
import { Container, PostCard } from "../../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => setPosts(posts?.documents || []));
  }, []);

  return posts.length > 0 ? (
    <div>Home</div>
  ) : (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
