import { getAllPosts } from '@/service/posts';

export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <>
      {allPosts}
    </>
  );
}
