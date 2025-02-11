import { Router } from "@axonlabs/core";
import { getUser } from "../../example/controller/usersController";

const router = Router();

router.get('/api/v1/user/1', getUser);
router.get('/api/v1/user/2', getUser);
router.get('/api/v1/user/3', getUser);
router.get('/api/v1/user/4', getUser);
router.get('/api/v1/user/12', getUser);
router.get('/api/v1/user/1asd', getUser);
router.get('/api/v1/user/1assd', getUser);
router.get('/api/v1/user/1ssada', getUser);
router.get('/api/v1/user/1ss', getUser);
router.get('/api/v1/user/1ff', getUser);
router.get('/api/v1/user/1xxx', getUser);
router.get('/api/v1/user/1axc', getUser);
router.get('/api/v1/user/1zz', getUser);
router.get('/api/v1/user/113', getUser);
router.get('/api/v1/user/1asdda', getUser);
router.get('/api/v1/user/asd1', getUser);
router.get('/api/v1/user/1asidu', getUser);
router.get('/api/v1/user/11234', getUser);
router.get('/api/v1/user/1fsf24', getUser);
router.get('/api/v1/user/1wef34', getUser);
router.get('/api/v1/user/f43f1', getUser);
router.get('/api/v1/user/134fwdf', getUser);
router.get('/api/v1/user/134rfs', getUser);
router.get('/api/v1/user/134fsd', getUser);

export default router;