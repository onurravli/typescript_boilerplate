"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const helloWorld = () => {
    console.log("Hello, World!");
    process_1.default.exit(0);
};
helloWorld();
