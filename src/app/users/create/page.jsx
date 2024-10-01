'use client'
// src/app/users/create/page.jsx
import { useState } from 'react';
import UserForm from '../../components/UserForm'; // Ajusta la ruta según tu estructura
import { useRouter } from 'next/navigation';

const CreateUser = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (user) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      router.push('/users'); // Redirecciona a la página de usuarios
    } else {
      const data = await response.json();
      setError(data.message); // Muestra el error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Crear Usuario</h1>
      {error && <p className="text-red-500">{error}</p>}
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateUser;
