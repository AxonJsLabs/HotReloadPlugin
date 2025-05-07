import { Request, Response } from "@axonlabs/core";

const testControllerFn = async (req: Request<any>, res: Response) => {
    return res.status(200).body({
        message: "jalebe"
    });
}

export {
    testControllerFn
}