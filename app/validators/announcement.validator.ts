import vine from '@vinejs/vine'
import { FuelType } from '../enums/fuel-type.js'
import { Gearbox } from '../enums/gearbox.js'

export const createAnnouncementValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6).maxLength(50),
    content: vine.string().trim().minLength(6).maxLength(500),
    name: vine.string().trim().minLength(6).maxLength(50),
    fuelType: vine.enum(Object.values(FuelType)),
    brand: vine.string().trim().minLength(6).maxLength(50),
    model: vine.string().trim().minLength(6).maxLength(50),
    door: vine.number().optional(),
    gearbox: vine.enum(Object.values(Gearbox))

  })
)
