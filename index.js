
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    return new Date(endYear) - Date.prototype.getFullYear(this.startDate)
  }
}
