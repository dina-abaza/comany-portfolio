import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add a full name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: false,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
    maxlength: [20, 'Phone number cannot be more than 20 characters'],
  },
  ideaDescription: {
    type: String,
    required: [true, 'Please add an idea description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);