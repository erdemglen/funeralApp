"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProviders = void 0;
const providerService_1 = require("../services/providerService");
const searchProviders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { longitude, latitude, maxDistance } = req.query;
    try {
        const providers = yield (0, providerService_1.getProviders)(Number(longitude), Number(latitude), Number(maxDistance));
        res.json(providers);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.searchProviders = searchProviders;
