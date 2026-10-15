import Gallery from "../models/Gallery.js";

export const getGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find({ isActive: true }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            galleryItems,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch gallery items",
        });
    }
};

export const getAllGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            galleryItems,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch gallery items",
        });
    }
};

export const addGalleryItem = async (req, res) => {
    try {
        const { title, description, category } = req.body;
        const image = req.file ? `/uploads/gallery/${req.file.filename}` : "";

        if (!title || !category || !image) {
            return res.status(400).json({
                success: false,
                message: "Title, category and image are required",
            });
        }

        const galleryItem = await Gallery.create({
            title,
            description,
            category,
            image,
        });

        res.status(201).json({
            success: true,
            message: "Gallery item added successfully",
            galleryItem,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add gallery item",
        });
    }
};

export const deleteGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndDelete(req.params.id);

        if (!galleryItem) {
            return res.status(404).json({
                success: false,
                message: "Gallery item not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Gallery item deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete gallery item",
        });
    }
};

export const updateGalleryStatus = async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndUpdate(
            req.params.id,
            { isActive: req.body.isActive },
            { new: true, runValidators: true }
        );

        if (!galleryItem) {
            return res.status(404).json({
                success: false,
                message: "Gallery item not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Gallery status updated successfully",
            galleryItem,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update gallery status",
        });
    }
};
