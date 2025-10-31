const Resep = require('../models/resep');

// GET semua resep
const getAllResep = async (req, res) => {
  try {
    const data = await Resep.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET resep berdasarkan ID
const getResepById = async (req, res) => {
  try {
    const data = await Resep.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Resep tidak ditemukan' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST resep baru
const createResep = async (req, res) => {
  try {
    const newResep = new Resep(req.body);
    const saved = await newResep.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update resep
const updateResepById = async (req, res) => {
  try {
    const updated = await Resep.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Resep tidak ditemukan' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE resep
const deleteResepById = async (req, res) => {
  try {
    const deleted = await Resep.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Resep tidak ditemukan' });
    res.json({ message: 'Resep berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {getAllResep,getResepById,createResep,updateResepById,deleteResepById};
