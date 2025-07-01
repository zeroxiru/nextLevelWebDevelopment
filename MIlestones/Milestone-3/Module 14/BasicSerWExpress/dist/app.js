"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hello sdfdfdf');
});
exports.default = app;
/**
 * server:- server handling like- starting, closing, error handling of server only
 * related to server
 * app:- routing handle, middleware, error related to routing handling
 * App folder:- app business logic handling like create get, single get, update, delete,
*/ 
