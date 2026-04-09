import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <h2>Update Your Profile</h2>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
</fieldset>
<h2>Amni Korlam korai daklam ki ase jibone mama</h2>
        </div>
    );
};

export default ProfilePage;