const mongoose = require('mongoose')

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
    },
    obatId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Obat"
    }]
})

module.exports = mongoose.model("Resep", resepSchema)
