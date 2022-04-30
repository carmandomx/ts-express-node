"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_repo_1 = require("./users.repo");
const userRoutes = express_1.default.Router();
userRoutes.get('/', (req, res) => res.send('Yet to implement GET /users'));
userRoutes.get('/:id', (req, res) => {
    console.log(req.params);
    res.send(`Yet to implement GET /users/${req.params.id}`);
});
userRoutes.post('/', (req, res) => {
    console.log(req.body);
    (0, users_repo_1.insertUser)(req.body);
    res.send("Yet to implement POST /users");
});
exports.default = userRoutes;
