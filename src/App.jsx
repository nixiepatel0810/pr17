
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-lg rounded bg-white p-6 shadow">
        <h1 className="mb-5 text-center text-2xl font-bold">
          Student List
        </h1>

        {users.map((user) => (
          <div
            key={user.id}
            className="mb-3 rounded border bg-gray-50 p-3"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
