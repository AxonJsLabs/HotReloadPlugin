import { Router } from "@axonlabs/core";
import { testControllerFn } from "../controller/testController";

const router = Router("/api/v1");

router.get('/user', testControllerFn);

export default router;