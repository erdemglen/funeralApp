import { Provider } from '../models/provider';

export const getProviders = async (longitude: number, latitude: number, maxDistance: number) => {
  return Provider.find({
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates: [longitude, latitude] },
        $maxDistance: maxDistance
      }
    }
  });
};