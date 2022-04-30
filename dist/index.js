"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_routes_1 = __importDefault(require("./users/users.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const rootRouter = express_1.default.Router();
rootRouter.get('/', (req, res) => {
    res.send('Config Express + Node + TS but dev friendly');
});
// Users'routes
rootRouter.use('/users', users_routes_1.default);
// Organizations' routes
// rootRouter.use('/orgs', orgsRoutes)
app.use(express_1.default.json());
app.use(rootRouter);
app.listen(port, () => {
    console.log('Server is up and running');
});
// GET users/:userId
// POST users
// PUT users/:userId
// DELETE users/:userId
// GET orgs/:orgId
// POST orgs
