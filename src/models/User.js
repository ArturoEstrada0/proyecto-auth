import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor introduce un nombre'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Por favor introduce un apellido'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Por favor introduce un email'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Por favor introduce una contraseña'],
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
