import Shipment from '../models/Shipment.js';

export const createShipment = async (req, res) => {
    try {
        const { sender, receiver, parcel, service, pickupDate, pickupWindow } = req.body;

        if (!sender || !receiver || !parcel || !service || !pickupDate || !pickupWindow) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required.',
            });
        }

        const trackingNumber = `TRK-${Date.now()}`;

        const shipment = await Shipment.create({
            trackingNumber,
            customer: req.user.userId,
            sender,
            receiver,
            parcel,
            service,
            pickupDate,
            pickupWindow
        });

        res.status(201).json({
            success: true,
            message: "Shipment created successfully",
            shipment,
        });

    } catch (error) {
        console.error('Error creating shipment:', error);

        res.status(500).json({
            success: false,
            message: 'server error.',
        });
    }
}

export const getMyShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find({
            customer: req.user.userId
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            shipments
        });

    } catch (error) {
        console.error("Error fetching shipments:", error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
};

export const getAllShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            shipments
        });
    } catch (error) {
        console.error("Error fetching all shipments:", error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
};

export const getShipmentById = async (req, res) => {
    try {

        const shipment = await Shipment.findById(req.params.id)

        if (!shipment) {
            {
                res.status(404).json({
                    success: false,
                    message: "Shipment not found"
                })
            }
        }

        res.status(200).json({
            success: true,
            shipment
        })

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid shipment ID."
            });
        }
        console.error("Error fetching shipment:", error);

        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateShipment = async (req, res) => {
    try {

        const shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            {
                res.status(404).json({
                    success: false,
                    message: "Shipment not found"
                })
            }
        }

        const updatedShipment = await Shipment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: "Shipment updated successfully",
            shipment: updatedShipment
        });

    } catch (error) {
        console.error("Error Updating shipment:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export const deleteShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found."
            });
        }

        await Shipment.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Shipment deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting shipment:", error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
};