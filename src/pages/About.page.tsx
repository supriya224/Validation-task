/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { collection, getDocs } from "@firebase/firestore";
import { MainLayout } from "../layouts";
import { db } from "../firebase.config";
/* eslint-disable prettier/prettier */
type Post = { id: string; title: string };
function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const collectionName = "users";

  const findAll = async () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const doc_refs = await getDocs(collection(db, collectionName));

    const res: any = [];
    // console.log("doc_refs", doc_refs.docs);

    doc_refs.forEach((country) => {
      console.log("Country: ", country.data());

      res.push({
        id: country.id,
        ...country.data()?.user
      });
    });
    setPosts(res);
    setLoading(false);
  };

  useEffect(() => {
    findAll();
  }, []);

  if (loading) {
    return <h1>loading firebaseData......</h1>;
  }
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
        <div className=" border-2 shadow-lg rounded-lg py-20">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <div key={post.id}>
                <h3> {post.username}</h3>
                <p> {post.wallet}</p>
                <p> {post.amount}</p>

                {/* <h3  {post.amount}</h3> */}
              </div>
            ))
          ) : (
            <h1>no post here</h1>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
