const mongoose = require('mongoose') // impor mongoose

// Skema untuk collection Obat
const obatSchema = new mongoose.Schema({
    nama_obat: {
        type: String,
        required: true,
        trim: true
    },
    jenis_obat: {
        type: String,
        required: true,
        trim: true
    },
    resepId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resep", // relasi ke koleksi Resep
        required: true
    }
})

// Membuat model Obat
const Obat = mongoose.model("Obat", obatSchema)

// Ekspor model
module.exports = Obat
