// import { inject } from '@adonisjs/core'
// import { HttpContext } from '@adonisjs/core/http'
// import {createCarValidator} from '#validators/car.validator'
// import Car from '#models/car'
//
// @inject()
// export default class UsersController {
//   constructor(private carService: CarService) {}
//
//   async index() {
//     const cars = await this.carService.getAll(1,10);
//     console.log(cars.toJSON());
//     return cars.toJSON();
//
//   }
//
//   async show({ params }: HttpContext) {
//     return this.carService.getOne(params.id)
//   }
//
//   async store({request, response}: HttpContext) {
//     const data = request.all();
//     const payload = await createCarValidator.validate(data) as Car;
//     const car = this.carService.insert(payload)
//     return response.created(car)
//   }
//
//   async destroy({response, params}: HttpContext) {
//     await this.carService.delete(params.id)
//     return response.status(200);
//   }
// }
