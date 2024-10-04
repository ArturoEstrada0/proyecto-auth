import Link from 'next/link';

const UserList = ({ users }) => {
  return (
    <div className="mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-green-500">
            <th className="py-2 px-4 border-b text-left text-white">Nombre</th>
            <th className="py-2 px-4 border-b text-left text-white">Email</th>
            <th className="py-2 px-4 border-b text-left text-white">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/users/${user._id}`}>
                  <button className="bg-green-700 text-white px-2 py-1 rounded mr-2">Editar</button>
                </Link>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;