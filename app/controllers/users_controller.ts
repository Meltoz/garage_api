import { inject } from '@adonisjs/core'
import { CarService } from '#services/car.service'
import { HttpContext } from '@adonisjs/core/http'
import {createCarValidator} from '#validators/car.validator'
import Car from '#models/car'

@inject()
export default class UsersController {
  constructor(private carService: CarService) {}

  async index() {
    const cars = await this.carService.getAll()

    const carsJSON = cars.map((car) => car.serialize())
    return carsJSON

  }

  async show({ params }: HttpContext) {
    return this.carService.getOne(params.id)
  }

  async store({request, response}: HttpContext) {
    const data = request.all();
    const payload = await createCarValidator.validate(data) as Car;
    console.log(payload)
    const car = this.carService.insert(payload)
    return response.created(car)
  }
}
