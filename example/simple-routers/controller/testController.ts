import { Request, Response } from "@axonlabs/core";
import { response } from "../services/test.service";

const testControllerFn = async (req: Request<any>, res: Response) => {
    return res.status(200).body(response());
}

export {
    testControllerFn
}