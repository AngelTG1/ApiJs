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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureService2 = void 0;
const SensorDataModel_1 = __importDefault(require("../models/SensorDataModel"));
class TemperatureService2 {
    // Método para guardar datos de temperatura
    saveTemperature2Data(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SensorDataModel_1.default.create({
                type: "temperature2",
                value,
            });
        });
    }
    // Método para obtener la última temperatura registrada
    getLatestTemperature2() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const latestData = yield SensorDataModel_1.default.findOne({
                where: { type: "temperature2" },
                order: [["timestamp", "DESC"]], // Ordenar por timestamp en orden descendente
            });
            // Validamos el valor y aseguramos que no retorne null
            return (_a = latestData === null || latestData === void 0 ? void 0 : latestData.value) !== null && _a !== void 0 ? _a : 0; // Devolver 0 si no hay datos o el valor es null
        });
    }
}
exports.TemperatureService2 = TemperatureService2;
//# sourceMappingURL=TemperatureService2.js.map