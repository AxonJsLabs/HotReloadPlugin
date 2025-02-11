import { Controller } from "@axonlabs/core";

const testControllerFn: Controller = async (req, res) => {
    return res.status(200).body({
        message: "jalebe"
    });
}

export {
    testControllerFn
}