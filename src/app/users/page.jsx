import Link from 'next/link';
import React from 'react';

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    users.map(user => <div key={user.id}>

                        <div className="card bg-neutral text-neutral-content ">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.phone}</p>
                                <div className="card-actions justify-end">
                                   <Link href={`/users/${user.id}`}>
                                    <button className="btn btn-primary">Show Details</button>
                                   </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                    )
                }
                
            </div>
        </div>
    );
};

export default UsersPage;