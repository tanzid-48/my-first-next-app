import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    const post = await res.json();
    return (
        <div>
            <div className="card bg-success text-primary-content">
                <div className="card-body">
                    <h2 className="card-title ">  Details</h2>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPage;