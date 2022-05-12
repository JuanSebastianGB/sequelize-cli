import { Address } from '../models/index';

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