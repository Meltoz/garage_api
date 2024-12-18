import Announcement from '#models/announcement'

export class AnnouncementService {
  getAll(pageIndex: number, pageSize: number): Promise<any> {
    return Announcement.query().preload('car').paginate(pageIndex, pageSize).then((paginator) => {
      return {
        meta: {
          currentPage: paginator.currentPage,
          pageSize: paginator.perPage,
          total: paginator.total,
        },
        data: paginator.all()
      };
    });
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
