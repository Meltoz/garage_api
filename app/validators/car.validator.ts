import vine from '@vinejs/vine'
import { FuelType } from '../enums/fuel-type.js'
import { Gearbox } from '../enums/gearbox.js'


export const createCarSchema = vine.object({
    fuelType: vine.enum(Object.values(FuelType)),
    brand: vine.string(),
    model: vine.string(),
    door: vine.number().optional(),
    gearbox: vine.enum(Object.values(Gearbox)),
    kilometers: vine.number(),
    price: vine.number(),
    year: vine.number(),
  });

export const createCarValidator = vine.compile(createCarSchema);
