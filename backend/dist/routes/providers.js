"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const providersController_1 = require("../controllers/providersController");
const router = (0, express_1.Router)();
router.get('/search', providersController_1.searchProviders);
exports.default = router;
