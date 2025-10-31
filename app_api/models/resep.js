const mongoose = require('mongoose') // impor mongoose

// Skema untuk collection Resep
const resepSchema = new mongoose.Schema({
    nama_pasien: {
        type: String,
        required: true,
        trim: true
    },
    dokter: {
        type: String,
        required: true,
        trim: true
    },
    tanggal_resep: {
        type: Date,
        default: Date.now
    },
    catatan: {
        type: String,
        trim: true
    }
})

// Sertakan skema Resep ke dalam model Resep
const Resep = mongoose.model("Resep", resepSchema)

// Ekspor model Resep
module.exports = Resep
