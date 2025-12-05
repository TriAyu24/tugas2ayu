// impor model Resep
const resepSchema = require("../models/resep")

// fungsi untuk mengambil semua resep
const getAllResep = async (req, res) => {
    try {
        const result = await resepSchema.find().populate("obatId", "nama_obat")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk mengambil resep berdasarkan ID
const getResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id).populate("obatId", "nama_obat")
        if (!result) {
            res.status(400).json({ message: "Resep tidak ditemukan" })
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menambahkan resep baru
const createResep = async (req, res) => {
    const resep = new resepSchema({
        nama_pasien: req.body.nama_pasien,
        dokter: req.body.dokter,
        tanggal_resep: req.body.tanggal_resep,
        catatan: req.body.catatan,
        obatId: req.body.obatId
    })

    try {
        const hasil = await resep.save()
        res.status(201).json(hasil)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// fungsi untuk update resep berdasarkan ID
const updateResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Resep tidak ditemukan" })
        } else {
            if (req.body.nama_pasien != null) {
                result.nama_pasien = req.body.nama_pasien
            }
            if (req.body.dokter != null) {
                result.dokter = req.body.dokter
            }
            if (req.body.tanggal_resep != null) {
                result.tanggal_resep = req.body.tanggal_resep
            }
            if (req.body.catatan != null) {
                result.catatan = req.body.catatan
            }
            if (req.body.obatId != null) {
                result.obatId = req.body.obatId
            }

            const updateResep = await result.save()
            res.status(200).json(updateResep)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// fungsi untuk menghapus resep berdasarkan ID
const deleteResepById = async (req, res) => {
    try {
        const result = await resepSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Resep tidak ditemukan" })
        } else {
            await result.deleteOne()
            res.status(200).json({ message: "Resep berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllResep, getResepById, createResep, updateResepById, deleteResepById }
