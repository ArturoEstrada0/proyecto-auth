'use client'
import { useState } from 'react';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [password, setPassword] = useState(initialData.password || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar Usuario
      </button>
    </form>
  );
};

export default UserForm;
