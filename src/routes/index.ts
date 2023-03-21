import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/index.controllers';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
// router.post('/users', getUsers);
// router.put('/users/:id', getUsers);
router.delete('/users/:id', getUsers);


export default router;