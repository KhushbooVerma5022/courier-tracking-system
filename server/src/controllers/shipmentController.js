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