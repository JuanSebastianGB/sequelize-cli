import { Address } from '../database/db.js';

export const all = async (req, res) => {
    const addresses = await Address.findAll({
        attributes: ['street'],
        include: {
            association: 'habitant'
        }
    });
    try {
        res.json({ addresses })
    } catch (error) {
        res.json({ error });
    }
}