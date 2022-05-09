// Why not just send the number! 🥲 this is the solution I can think of right now 😴
const TEXT_POINTS = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
};

export default class EstimationPoints {
  static getNumberFromName(numberName) {
    return TEXT_POINTS[numberName];
  }
}
