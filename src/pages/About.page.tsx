/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { MainLayout } from "../layouts";
import { db } from "../firebase.config";
/* eslint-disable prettier/prettier */
type Post = { id: string; title: string };
function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPostFromFirebase: any[] = [];
    const subscriber = db.collection("user").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        getPostFromFirebase.push({ ...doc.data(), key: doc.id });
        setPosts(getPostFromFirebase);
        setLoading(false);
      });
    });
    return () => subscriber();
  }, []);

  if (loading) {
    return <h1>loading firebaseData......</h1>;
  }
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
        <div className=" border-2 shadow-lg rounded-lg py-20">
          {posts.length > 0 ? (
            posts.map((post: any) => <div key={post.id}>Post answer</div>)
          ) : (
            <h1>no post here</h1>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
