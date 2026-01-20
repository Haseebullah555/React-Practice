import { useEffect, useState } from "react";

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}
function Post() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false);
            });
    }, []);
    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <h1>All Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
export default Post;