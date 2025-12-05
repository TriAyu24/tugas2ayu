// impor model Obat
const obatSchema = require("../models/obat")

// fungsi untuk mengambil semua obat
const getAllObat = async (req, res) => {
    try {
        const result = await obatSchema.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengambil obat berdasarkan ID
const getObatById = async (req, res) => {
    try {
        const result = await obatSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Obat tidak ditemukan" })
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menambahkan obat baru
const createObat = async (req, res) => {
    const obat = new obatSchema({
        nama_obat: req.body.nama_obat,
        jenis_obat: req.body.jenis_obat,
        stok: req.body.stok
    })

    try {
        const hasil = await obat.save()
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// fungsi untuk update obat berdasarkan ID
const updateObatById = async (req, res) => {
    try {
        const result = await obatSchema.findById(req.params.id)
        if (!result) {
            return res.status(400).json({ message: "Obat tidak ditemukan" })
        }

        if (req.body.nama_obat != null) {
            result.nama_obat = req.body.nama_obat
        }
        if (req.body.jenis_obat != null) {
            result.jenis_obat = req.body.jenis_obat
        }
        if (req.body.stok != null) {
            result.stok = req.body.stok
        }

        const updateObat = await result.save()
        res.status(200).json(updateObat)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menghapus obat berdasarkan ID
const deleteObatById = async (req, res) => {
    try {
        const result = await obatSchema.findById(req.params.id)
        if (!result) {
            return res.status(400).json({ message: "Obat tidak ditemukan" })
        }

        await result.deleteOne()
        res.status(200).json({ message: "Obat berhasil dihapus" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllObat,
    getObatById,
    createObat,
    updateObatById,
    deleteObatById
}
