const TEXT_POINTS = {
  ONE: 1,
};

export default class EstimationPoints {
  static getNumberFromName(numberName) {
    return TEXT_POINTS[numberName];
  }
}
