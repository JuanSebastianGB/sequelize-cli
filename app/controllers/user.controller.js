import { User } from "../models/index";

export const all = async (req, res) => {

    try {
        const users = await User.findAll({
            include: {
                association: "direction",
                attributes: ['street']
            }
        });
        res.json({ users });
    } catch (error) {
        res.json({ error });
    }
}