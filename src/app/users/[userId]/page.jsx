import React from 'react';

const UserDetailsPage = async({ params }) => {
    const {userId} = await params;
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const user = await res.json()


    console.log("user id ",userId)
    return (
        <div>
            {
                <div className="">
                    <h2>{user.username}</h2>
                <p>{user.email}</p>
                </div>
            }
        </div>
    );
};

export default UserDetailsPage;