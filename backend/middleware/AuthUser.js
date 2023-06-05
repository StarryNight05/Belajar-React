import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon Login terlebih dahulu" });
    }
    const user = await Users.findOne({
        where: {
            id: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User gk ditemukan" });
    req.userId = user.id;
    req.role = user.role;
    next();
}

export const hasLogin = async (req, res, next) => {
    if (req.session.userId) {
        return res.status(200).json({ msg: "Anda Sudah Login" });
    }
    const user = await Users.findOne({
        where: {
            id: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
    next();
}

export const adminOnly = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon Login terlebih dahulu" });
    }
    const user = await Users.findOne({
        where: {
            id: req.session.userId
        }
    });
    if (!user) return res.status(404).json({ msg: "User gk ditemukan" });
    if (user.role !== "admin") return res.status(403).json({ msg: "Akses ditolak" });
    next();
}