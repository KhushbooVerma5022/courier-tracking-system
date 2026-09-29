import mongoose from "mongoose";

const trackingUpdateSchema = new mongoose.Schema(
    {
        shipment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shipment",
            required: true,
        },

        status: {
            type: String,
            enum: [
                "Booked",
                "Picked Up",
                "In Transit",
                "Out for Delivery",
                "Delivered",
                "Cancelled",
            ],
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        dateTime: {
            type: Date,
            required: true,
        },

        remarks: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const TrackingUpdate = mongoose.model("TrackingUpdate",trackingUpdateSchema);

export default TrackingUpdate;