import { Router } from 'express';
import { searchProviders } from '../controllers/providersController';

const router = Router();

router.get('/search', searchProviders);

export default router;