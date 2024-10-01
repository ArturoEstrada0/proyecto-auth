'use client'
// src/app/users/[id]/page.jsx
import { useEffect, useState } from 'react';
import UserForm from '../../components/UserForm';
import { useRouter } from 'next/navigation';

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query; // Obtén el ID del usuario de la URL
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/users/${id}`);
          if (!response.ok) {
            throw new Error('Error al cargar el usuario');
          }
          const data = await response.json();
          setUser(data.user);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (updatedUser) => {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      router.push('/users'); // Redirige a la lista de usuarios
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  if (loading) {
    return <p>Cargando usuario...</p>; // Mensaje de carga
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Editar Usuario</h1>
      {user && <UserForm onSubmit={handleSubmit} user={user} />}
    </div>
  );
};

export default EditUser;
