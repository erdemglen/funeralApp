"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const mongoose_1 = require("mongoose");
const providerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    services: { type: [String], required: true },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    }
});
providerSchema.index({ location: '2dsphere' });
exports.Provider = (0, mongoose_1.model)('Provider', providerSchema);
