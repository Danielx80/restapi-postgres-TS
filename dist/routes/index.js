"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
const router = (0, express_1.Router)();
router.get('/users', index_controllers_1.getUsers);
router.get('/users/:id', index_controllers_1.getUserById);
// router.post('/users', getUsers);
// router.put('/users/:id', getUsers);
router.delete('/users/:id', index_controllers_1.getUsers);
exports.default = router;