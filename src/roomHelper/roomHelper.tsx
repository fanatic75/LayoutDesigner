import Plotter from './Plotter';
export default class RoomHelper {
    static getBoundingRect(points: Point[]): RoomRect {
      const maxPt = points.reduce((acc, currVal) => {
        return {
          x: Math.max(acc.x, currVal.x),
          y: Math.max(acc.y, currVal.y),
        };
      });
  
      const boundingRect: RoomRect = {
        type: 'rect',
        origin: points.reduce((acc, currVal) => {
          return {
            x: Math.min(acc.x, currVal.x),
            y: Math.min(acc.y, currVal.y),
          };
        }),
        w: 0,
        h: 0,
      };
  
      boundingRect.w = maxPt.x - boundingRect.origin.x;
      boundingRect.h = maxPt.y - boundingRect.origin.y;
  
      return boundingRect;
    }
  }
  