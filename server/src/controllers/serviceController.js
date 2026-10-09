import Service from "../models/Service.js";

export const getActiveServices = async (req, res) => {
    try {
        const services = await Service.find({
            isActive: true,
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            services,
        });
    } catch (error) {
        console.error("Error fetching services:", error);

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            services,
        });
    } catch (error) {
        console.error("Error fetching all services:", error);

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

export const createService = async (req, res) => {
    try {
        const { name, category, description, priceLabel, price, features, } = req.body;

        if (!name || !category || !description || !price) {
            return res.status(400).json({
                success: false,
                message: "Name, category, description and price are required.",
            });
        }

        const existingService = await Service.findOne({
            name: name.trim(),
        });

        if (existingService) {
            return res.status(409).json({
                success: false,
                message: "A service with this name already exists.",
            });
        }

        const service = await Service.create({
            name,
            category,
            description,
            priceLabel,
            price,
            features: features || [],
        });

        res.status(201).json({
            success: true,
            message: "Service created successfully.",
            service,
        });
    } catch (error) {
        console.error("Error creating service:", error);

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

export const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found.",
            });
        }

        const {
            name,
            category,
            description,
            priceLabel,
            price,
            features,
        } = req.body;

        if (name !== undefined) service.name = name;
        if (category !== undefined) service.category = category;
        if (description !== undefined) service.description = description;
        if (priceLabel !== undefined) service.priceLabel = priceLabel;
        if (price !== undefined) service.price = price;
        if (features !== undefined) service.features = features;

        await service.save();

        res.status(200).json({
            success: true,
            message: "Service updated successfully.",
            service,
        });
    } catch (error) {
        console.error("Error updating service:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid service ID.",
            });
        }

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "A service with this name already exists.",
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

export const updateServiceStatus = async (req, res) => {
    try {
        const { isActive } = req.body;

        if (typeof isActive !== "boolean") {
            return res.status(400).json({
                success: false,
                message: "isActive must be true or false.",
            });
        }

        const service = await Service.findByIdAndUpdate(
            req.params.id,
            { isActive },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: isActive
                ? "Service activated successfully."
                : "Service deactivated successfully.",
            service,
        });
    } catch (error) {
        console.error("Error updating service status:", error);

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

export const deleteService = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Service deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting service:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid service ID.",
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};