import { Router } from "@axonlabs/core";
import { getUser } from "../../controller/usersController";

const router = Router();

router.get('/api/v1/user/1', getUser);
router.get('/api/v1/user/2', getUser);
router.get('/api/v1/user/3', getUser);

export default router;