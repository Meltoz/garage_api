import { DateTime } from 'luxon'
import { BaseModel, column, hasOne} from '@adonisjs/lucid/orm'
import Car from '#models/car'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Announcement extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string;

  @column()
  declare content: string;

  @hasOne(() => Car,{
    foreignKey: 'announcementId'
  })
  public car!: HasOne<typeof Car>
}
