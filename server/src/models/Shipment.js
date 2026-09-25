import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
    trackingNumber: {
        type: String,
        required: true,
        unique: true
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    sender: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
    },

    receiver: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
    },

    parcel: {
        packageType: {
            type: String,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },

    service: {
        type: String,
        required: true,
    },

    pickupDate: {
        type: Date,
        required: true,
    },

    pickupWindow: {
        type: String,
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
        default: "Booked",
    },

},
    {
        timestamps: true,
    }
);

const Shipment = mongoose.model('Shipment', shipmentSchema);

export default Shipment;
