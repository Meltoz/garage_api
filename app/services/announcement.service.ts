import Announcement from '#models/announcement'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export class AnnouncementService {
    getAll(pageIndex: number, pageSize : number): Promise<ModelPaginatorContract<Announcement>> {
        return Announcement.query().paginate(pageIndex, pageSize);
    }
    getOne(id: number) {
        return Announcement.query().where('id', id).first();
    }
    insert(announcement: Announcement) {
        return Announcement.create(announcement);
    }
    async delete(id: number) {
        const announcement = await Announcement.findOrFail(id);
        await announcement.delete();
    }
}
