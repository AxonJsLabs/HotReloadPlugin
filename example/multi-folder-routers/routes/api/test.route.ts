import { Router } from "@axonlabs/core";
import { testControllerFn } from "../../controller/testController";

const router = Router();

router.get('/api/v1/user', testControllerFn);

export default router;