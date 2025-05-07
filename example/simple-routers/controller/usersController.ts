import { Request, Response } from "@axonlabs/core";

const getUser = async (req: Request<any>, res: Response) => {
    return res.status(200).body({
        user: {
            username: "Mr.MKZ",
            password: null,
            email: "mr.mkz@axonlabs.com",
            role: "Admin"
        }
    });
}

export {
    getUser
}