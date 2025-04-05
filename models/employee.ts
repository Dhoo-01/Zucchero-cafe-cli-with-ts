class Employee {
  id: number
  name: string
  job: string
  otherJob?: string

  constructor(id: number, name: string, job: string, otherJob?: string) {
    this.id = id
    this.name = name
    this.job = job
    this.otherJob = otherJob
  }
}

const springfield = new Employee(1, "Springfield", "manajer", "barista")
const wawa = new Employee(2, "watuk", "tsundere waif")
const centaureissi = new Employee(3, "centaureissi", "waitress")
const sharkry = new Employee(4, "sharkry", "live performer")

export { springfield, wawa, centaureissi, sharkry }
