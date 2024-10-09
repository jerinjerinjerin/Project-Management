import { Router } from 'express';
import { search } from '../controller/SearchController';

const router = Router();

router.get('/', search);

export default router;
