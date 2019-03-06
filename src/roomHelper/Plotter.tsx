export default class Plotter {
  static getPointsFromString(points: string): Point[] {
    const pts = points.split(' ').map((point) => {
        const pt = point.split(',');
        return {x: parseInt(pt[0]), y: parseInt(pt[1])};
    });
    return pts;
  }
  static getStringFromPoints(points: Point[]): string {
    console.log(points);
    return points.map((point) => point.x + ',' + point.y).join(' ');
    
  }

  static rectToPolygon(rectangle: RoomRect): Point[] {
    const polyCoords: Point[] = [];
    polyCoords.push({x: rectangle.origin.x, y: rectangle.origin.y});
    polyCoords.push({x: rectangle.origin.x + rectangle.w, y: rectangle.origin.y});
    polyCoords.push({x: rectangle.origin.x + rectangle.w, y: rectangle.origin.y + rectangle.h});
    polyCoords.push({x: rectangle.origin.x, y: rectangle.origin.y + rectangle.h});
    return polyCoords;
  }
}
