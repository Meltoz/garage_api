import vine from '@vinejs/vine';
import { createCarSchema } from '#validators/car.validator'

export const createAnnouncementValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6).maxLength(50),
    content: vine.string().trim().minLength(6).maxLength(500),
    car: createCarSchema
  })
)
