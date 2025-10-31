const obatSchema = require("../models/obat")

// ambil semua obat + relasi resep
const getAllObat = async (req, res) => {
    try {
        const result = await obatSchema.findById().populate("resepId")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ambil obat berdasarkan ID
const getObatById = async (req, res) => {
    try {
        const result = await obatSchema.findById(req.params.id).populate("resepId")
        if (!result) {
            res.status(400).json({ message: "Obat tidak ditemukan" })
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// tambah obat baru
const createObat = async (req, res) => {
    const obat = new obatSchema({
        nama_obat: req.body.nama_obat,
        jenis_obat: req.body.jenis_obat,
        stok: req.body.stok,
        harga_satuan: req.body.harga_satuan,
        resepId: req.body.resepId
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
            res.status(400).json({ message: "obat tidak ditemukan" })
        } else {
            if (req.body.nama_obat != null) {
                result.nama_obat = req.body.nama_obat
            }
            if (req.body.jenis_obat != null) {
                result.jenis_obat = req.body.jenis_obat
            }
            if (req.body.stok != null) {
               result.stok = req.body.stok
            }
            if (req.body.harga_satuan != null) {
                result.harga_satuan = req.body.harga_satuan
            }
             if (req.body.resepId != null) {
                result.resepId = req.body.resepId
            }

            const updateLagu = await result.save()
            res.status(200).json(updateObat)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// hapus obat berdasarkan ID
const deleteObatById = async (req, res) => {
    try {
        const result = await obatSchema.findById(req.params.id)
        if (!result) {
            res.status(400).json({ message: "Obat tidak ditemukan" })
        } else {
            await result.deleteOne()
            res.status(200).json({ message: "Obat berhasil dihapus" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllObat, getObatById, createObat, updateObatById, deleteObatById }
