'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserList from '../components/UserList';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-mongo-green">Usuarios</h1>
      <Link href="/users/create">
        <button className="bg-mongo-green text-mongo-white px-4 py-2 rounded">Crear Usuario</button>
      </Link>
      <UserList users={users} />
    </div>
  );
};

export default UserPage;