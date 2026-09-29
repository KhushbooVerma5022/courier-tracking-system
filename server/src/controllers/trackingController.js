import Shipment from "../models/Shipment.js";
import TrackingUpdate from "../models/TrackingUpdate.js";

export const getTrackingByNumber = async (req, res) => {
    try {
        const { trackingNumber } = req.params;

        const shipment = await Shipment.findOne({ trackingNumber });

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found."
            });
        }

        const trackingUpdates = await TrackingUpdate.find({
            shipment: shipment._id
        }).sort({ dateTime: 1 });

        res.status(200).json({
            success: true,
            shipment,
            trackingUpdates
        });

    } catch (error) {
        console.error("Error fetching tracking:", error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
};

export const addTrackingUpdate = async (req, res) => {
    try {
        const { trackingNumber, status, location, dateTime, remarks } = req.body;

        if (
            !trackingNumber ||
            !status ||
            !location ||
            !dateTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Tracking number, status, location and date/time are required."
            });
        }

        const shipment = await Shipment.findOne({ trackingNumber });

        if (!shipment) {
            return res.status(404).json({
                success: false,
                message: "Shipment not found."
            });
        }

        const trackingUpdate = await TrackingUpdate.create({
            shipment: shipment._id,
            status,
            location,
            dateTime,
            remarks
        });

        shipment.status = status;
        await shipment.save();

        res.status(201).json({
            success: true,
            message: "Tracking update added successfully.",
            trackingUpdate
        });

    } catch (error) {
        console.error("Error adding tracking update:", error);

        res.status(500).json({
            success: false,
            message: "Server error."
        });
    }
};