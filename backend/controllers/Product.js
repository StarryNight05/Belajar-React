import Products from "../models/ProductModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
    try {
        let response;
        if (req.role === 'admin') {
            response = await Products.findAll({
                attributes: ['id', 'name', 'price'],
                include: [{
                    model: Users,
                    attributes: ['id', 'name', 'email', 'role']
                }]
            });
        } else {
            response = await Products.findAll({
                attributes: ['id', 'name', 'price'],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: Users,
                    attributes: ['id', 'name', 'email', 'role']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const getProductById = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data gk ada" });
        let response;
        if (req.role === 'admin') {
            response = await Products.findOne({
                attributes: ['id', 'name', 'price'],
                where: {
                    id: product.id
                },
                include: [{
                    model: Users,
                    attributes: ['id', 'name', 'email', 'role']
                }]
            });
        } else {
            response = await Products.findOne({
                attributes: ['id', 'name', 'price'],
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                },
                include: [{
                    model: Users,
                    attributes: ['id', 'name', 'email', 'role']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const createProduct = async (req, res) => {
    // if (req.files === null) return res.status(400).json({ msg: 'No File added' });
    const { name, price } = req.body;
    // const file = req.files.file;
    // const size = file.data.length;
    // const ext = path.extname(file.name);
    // const fileName = file.md5 + ext;
    // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    // const allowedType = ['.jpeg', '.jpg', '.png'];

    // if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid image" });

    // if (size > 5000000) return res.status(422).json({ msg: "Image must be less than 5MB" });

    // file.mv(`./public/images/${fileName}`, async (err) => {
    //     if (err) return res.status(500).json({ msg: err.message });

    // });
    try {
        await Products.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({ msg: "Produk berhasil ditambah" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const updateProduct = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { name, price } = req.body;
        if (req.role === 'admin') {
            await Products.update({ name, price }, {
                where: {
                    id: product.id
                }
            });
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses ditolak" })
            await Products.update({ name, price }, {
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Produk berhasil diubah" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { name, price } = req.body;
        if (req.role === 'admin') {
            await Products.destroy({
                where: {
                    id: product.id
                }
            });
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses ditolak" })
            await Products.destroy({
                where: {
                    [Op.and]: [{ id: product.id }, { userId: req.userId }]
                }
            });
        }
        res.status(200).json({ msg: "Produk berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}