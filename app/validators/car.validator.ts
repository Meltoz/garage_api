import vine from '@vinejs/vine'
import { FuelType } from '../enums/fuel-type.js'

export const createCarValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6).maxLength(50),
    fuelType: vine.enum(Object.values(FuelType)),
    }
  )
)
