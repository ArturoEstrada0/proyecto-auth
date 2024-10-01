import mongoose from 'mongoose';

let isConnected = false; // Para evitar reconexiones múltiples

export async function connectToDatabase() {
  if (isConnected) {
    console.log('Ya conectado a MongoDB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI); // Elimina las opciones obsoletas
    isConnected = true;
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB', error);
  }
}
