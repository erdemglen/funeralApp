import { Schema, model } from 'mongoose';

const providerSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  services: { type: [String], required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
});

providerSchema.index({ location: '2dsphere' });

export const Provider = model('Provider', providerSchema);