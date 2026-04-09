import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'User Page',
  description: '...',
}

const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json();
    return (
        <div>
           <div className="grid md:grid-cols-4 gap-4 ">
                {
                    posts.map(post => <div key={post.id}>
                        <div className="card bg-red-500 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <div className="card-actions justify-end">
                                  <Link href={`/posts/${post.id}`}>
                                    <button className="btn btn-primary">Show Details</button>
                                  </Link>
                                </div>
                            </div>
                        </div>


                    </div>)

                }
            </div>
        </div>
    );
};

export default PostsPage;