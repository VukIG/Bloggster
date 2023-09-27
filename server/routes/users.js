import { createUser } from '../controllers/users';

const router = express.Router();

router.post('/createUser', createUser);

export default router;
