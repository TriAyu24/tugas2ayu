const mongoose = require('mongoose')

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
    }
})

module.exports = mongoose.model("Obat", obatSchema)
