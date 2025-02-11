import { Controller } from "@axonlabs/core";

const getUser: Controller = async (req, res) => {
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