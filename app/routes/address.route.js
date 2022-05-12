import { Router } from 'express';
import { all } from '../controllers/address.controller';

const router = Router();

router.get('/', all);

export default router;