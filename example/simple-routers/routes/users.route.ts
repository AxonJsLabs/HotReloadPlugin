import { Router } from "@axonlabs/core";
import { getUser } from "../controller/usersController";

const router = Router("/api/v1");

router.get('/user/1', getUser);
router.get('/user/2', getUser);
router.get('/user/3', getUser);
router.get('/user/4', getUser);

export default router;