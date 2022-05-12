import { User } from "../database/db";

export const all = async (req, res) => {

    try {
        const users = await User.findAll();
        res.json({ users });
    } catch (error) {
        res.json({ error });
    }
}