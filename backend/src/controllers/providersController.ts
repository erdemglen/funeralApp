import { Request, Response } from 'express';
import { getProviders } from '../services/providerService';

export const searchProviders = async (req: Request, res: Response) => {
  const { longitude, latitude, maxDistance } = req.query;
  try {
    const providers = await getProviders(Number(longitude), Number(latitude), Number(maxDistance));
    res.json(providers);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};