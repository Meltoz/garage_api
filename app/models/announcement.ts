import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { FuelType } from '../enums/fuel-type.js'

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
}
