import Car from '#models/car'

export class CarService {
  getAll(): Promise<Car[]> {
    return Car.query()
  }

  getOne(id: number): Promise<Car | null> {
    return Car.query().where('id', id).first()
  }

  insert(car: Car): Promise<Car> {
    return Car.create(car);
  }
}
