import type { HttpContext } from '@adonisjs/core/http'
import { AnnouncementService } from '#services/announcement.service'
import { inject } from '@adonisjs/core'
import { createAnnouncementValidator } from '#validators/announcement.validator'
import Announcement from '#models/announcement'

@inject()
export default class AnnouncementsController {
  constructor(private announcementService: AnnouncementService) {}

  async index({ response, request }: HttpContext) {
    const announcements = await this.announcementService.getAll(
      request.input('page', 1),
      request.input('pageSize', 10)
    )
    return response.json(announcements)
  }

  async show({params, response}: HttpContext) {
    const car = await this.announcementService.getOne(params.id);
    if(!car) {
      return response.notFound({message: 'Car not found'})
    }
    return response.json(await this.announcementService.getOne(params.id))
  }

  async store({ request, response }: HttpContext) {
    const data = request.all();
    try{
      const payload = await createAnnouncementValidator.validate(data) as unknown as Announcement;
      const announcement = await this.announcementService.insert(payload);
      response.created(announcement)
    }
    catch (error) {
      response.badRequest({error: error.messages})
    }
  }
}
