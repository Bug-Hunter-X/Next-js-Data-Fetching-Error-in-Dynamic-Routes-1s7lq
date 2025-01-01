```javascript
// bugSolution.js
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  try {
    // Simulate data fetching; replace with your actual data source
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post with ID ${id}: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: { post: data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
      // or redirect to an error page
    };
  }
};

export default function Post({ post }) {
  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```