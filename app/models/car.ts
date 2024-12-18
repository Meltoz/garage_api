import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { FuelType } from '../enums/fuel-type.js'
import Announcement from '#models/announcement'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @column({columnName: 'fuelType'})
  declare fuelType: FuelType;

  @column()
  declare brand: string;

  @column()
  declare model: string;

  @column()
  declare door?: number;

  @column({columnName: 'gearbox'})
  declare gearbox: string;

  @column()
  declare kilometers: number;

  @column()
  declare price: number;

  @column()
  declare year: number;

  @column({columnName: 'announcementId'})
  declare announcementId: number;

  @belongsTo(() => Announcement, {
    foreignKey: 'announcementId'
  })
  public announcement!: BelongsTo<typeof Announcement>

}
