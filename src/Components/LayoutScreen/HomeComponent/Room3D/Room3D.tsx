import React, { useEffect, useState } from "react";
import Plotter from "../../../../roomHelper/Plotter";
import RoomHelper from '../../../../roomHelper/roomHelper';
import Victor from 'victor';
import { WALL_DEPTH, DEVICES_CONFIG } from './../../../../Utilities/constants';
import VectorObject from "../../../../interfaces/VectorObject";

export default function Room3D(props: any) {
    const [room, updateRoom] = useState(props.room3d);
    const [wallAngles, updateWallAngles] = useState([] as number[]);
    let doors: any = [];
    let devicesGlobal: Appliance[];
    let decorations: Decoration[];
    let roomCoords: Point[];
    let walls: Wall3D[] = [];
    const [outerCoords ,updateOuterCoords]:[Point[],any]=useState([]);
    let roomPolygon: Point[];
    let roomRect: RoomRect;
    let roomRectNorm: RoomRect;


    useEffect(() => {
        setRoomVariables();
        setOuterCoords(roomPolygon);
        setWalls(roomPolygon, outerCoords);
        setDoors();
        setWallAngles();
        setDecorations();
        setDevices();

    },[props.room3d,outerCoords]);

    function setRoomVariables() {
        roomCoords = room.coordinates.type === 'rect' ?
            Plotter.rectToPolygon(room.coordinates) : Plotter.getPointsFromString(room.coordinates.points);
        roomRect = RoomHelper.getBoundingRect(roomCoords);
        let outerPolygon = room.coordinates.type === 'rect' ?
            Plotter.rectToPolygon(room.coordinates) : Plotter.getPointsFromString(room.coordinates.points);
        roomPolygon = getNormalizedPolygon(outerPolygon);
        roomRectNorm = RoomHelper.getBoundingRect(roomPolygon);
    }

    function setOuterCoords(polyCoords?: Point[]) {
        //@ts-ignore
        const noOfVertices = polyCoords.length;
        //@ts-ignore
        const normalizedPolyCoords = polyCoords;

        for (let i = 0; i < noOfVertices; i++) {
            const prev = (i - 1 + noOfVertices) % noOfVertices;
            const next = (i + 1) % noOfVertices;
            //@ts-ignore
            const vp = Victor.fromObject(normalizedPolyCoords[prev]);
            //@ts-ignore
            const v0 = Victor.fromObject(normalizedPolyCoords[i]);
            //@ts-ignore
            const vn = Victor.fromObject(normalizedPolyCoords[next]);

            const vThis = vn.clone().subtract(v0);
            const vPrev = vp.clone().subtract(v0);

            const bisection = vPrev.clone().norm().add(vThis.clone().norm()).multiplyScalar(100);

            if (!isConcave(vThis, vPrev)) {
                bisection.rotateDeg(180);
            }

            const length = getBisectorLength(vThis, vPrev);
            bisection.norm().multiplyScalar(length).add(v0);
            bisection.x = bisection.x.round(2);
            bisection.y = bisection.y.round(2);
            updateOuterCoords(outerCoords.push(bisection));
          
        }
    }


    function setWalls(polyCoords: Point[], innerCoords: Point[]) {
        const wallsInfo: Wall3D[] = [];
        const wallsCoordinates = getWallsCoordinates(polyCoords, innerCoords);
        for (let i = 0; i < polyCoords.length; i++) {
            const next = (i + 1) % polyCoords.length;
            const pn = Victor.fromObject(polyCoords[next]);
            const p0 = Victor.fromObject(polyCoords[i]);

            const vector100 = new Victor(100, 100);
            const wallVector = pn.clone().subtract(p0);
            wallVector.norm().multiply(vector100);
            wallVector.rotateDeg(90);

            const leftAdjust = wallVector.clone().norm().x / 20;
            const topAdjust = wallVector.clone().norm().y / 20;
            const angle = wallVector.angleDeg() > 0 ? wallVector.angleDeg() : (360 + wallVector.angleDeg()) % 360;

            wallsInfo.push({
                coordinates: wallsCoordinates[i],
                angle: Math.round(angle) as number,
                relativeDisplacement: {
                    x: 0.5 + leftAdjust,
                    y: 0.5 + topAdjust,
                },
            });
        }
        walls = wallsInfo;
    }


    function setDoors() {
        const doors = room.doors;
        walls.forEach((wall, wallIndex) => {
            const wallLine = getWallBaseline(wall);

            doors !== undefined && doors[wallIndex].forEach((door2d: any) => {
                const doorLine = getDoorLineVector(door2d.height, wall);
                const door = getNormalizedDoor(door2d, wallLine, wallIndex, room);
                const [doorStart, doorEnd] = sortDoorPoints(door, wallLine.inner);

                const doorPolygon: Point[] = [];
                doorPolygon.push(calculateDoorPoint(doorLine, wallLine.inner, doorStart)); // doorTopStart;
                doorPolygon.push(calculateDoorPoint(doorLine, wallLine.inner, doorEnd)); // doorTopEnd;
                doorPolygon.push(doorEnd); // doorBaseEnd;
                doorPolygon.push(doorStart); // doorBaseStart;

                const doorColor = door.color ? door.color : '#966F33';
                doors.push(doorPolygon);
            });
        });
    }


    function setWallAngles() {
        const color = '#D3C5B8';
        [0, 90, 180, 270].forEach((angle) => wallAngles.push(angle));
        walls.forEach((wall) => {
            if (wall.angle % 90 !== 0) {
                wallAngles.push(wall.angle);
            }
        });
    }

    function setDecorations() {
        if (!room.decorations) {
            return;
        }
        decorations = room.decorations.map((d: Decoration) => {
            d.scale = d.scale || 1;
            d.rotate = d.rotate || 0;
            d.x = (d.x * (roomRectNorm.w + 2 * WALL_DEPTH) / 100);
            d.y = (d.y * (roomRectNorm.h + 2 * WALL_DEPTH) / 100);
            d.style = {
                transformOrigin: `${d.x}px ${d.y}px 0px`,
                transform: `rotateZ(${d.rotate}deg) scale(${d.scale})`,
                width: `${DEVICES_CONFIG[d.type].width}`,
                height: `${DEVICES_CONFIG[d.type].height}`,
            };
            d.x = (d.x - (DEVICES_CONFIG[d.type] !== undefined ? DEVICES_CONFIG[d.type].width * d.scale / 2 : 0));
            d.y = (d.y - (DEVICES_CONFIG[d.type] !== undefined ? DEVICES_CONFIG[d.type].height * d.scale / 2 : 0));
            return d;
        });
    }

    function setDevices() {
        if (!room.devices) {
            return;
        }
        const devices = room.devices;
        devicesGlobal = devices.map((d: Appliance) => {
            d.scale = d.scale || 1;
            d.rotate = d.rotate || 0;
            d.x = (d.x * (roomRectNorm.w + 2 * WALL_DEPTH) / 100);
            d.y = (d.y * (roomRectNorm.h + 2 * WALL_DEPTH) / 100);
            d.style = {
                transformOrigin: `${d.x}px ${d.y}px 0px`,
                transform: `rotateZ(${d.rotate}deg) scale(${d.scale})`,
                width: `${DEVICES_CONFIG[d.type].width}`,
                height: `${DEVICES_CONFIG[d.type].height}`,
            };
            d.x = (d.x - (DEVICES_CONFIG[d.type] !== undefined ? DEVICES_CONFIG[d.type].width * d.scale / 2 : 0));
            d.y = (d.y - (DEVICES_CONFIG[d.type] !== undefined ? DEVICES_CONFIG[d.type].height * d.scale / 2 : 0));
            return d;
        });
    }



    function getBisectorLength(vThis: any, vPrev: any) {
        let theta = Math.abs(vPrev.clone().horizontalAngleDeg() - vThis.clone().horizontalAngleDeg());
        theta = theta > 180 ? 360 - theta : theta;
        const length = WALL_DEPTH / Math.sin((theta * Math.PI) / (2 * 180));
        return length;
    }


    function getNormalizedPolygon(polygon: Point[]): Point[] {
        const normalizeCoordinate: Point = {
            x: Math.min.apply(null, polygon.map((point) => point.x)),
            y: Math.min.apply(null, polygon.map((point) => point.y)),
        };
        const maxCoordinate: Point = {
            x: Math.max.apply(null, polygon.map((point) => point.x)),
            y: Math.max.apply(null, polygon.map((point) => point.y)),
        };

        const width = maxCoordinate.x - normalizeCoordinate.x;
        const height = maxCoordinate.y - normalizeCoordinate.y;

        const widthRatio = width > height ? 1 : width / height;
        const heightRatio = height > width ? 1 : height / width;

        const adjustment = {
            x: (100 - 2 * WALL_DEPTH) * widthRatio / (maxCoordinate.x - normalizeCoordinate.x),
            y: (100 - 2 * WALL_DEPTH) * heightRatio / (maxCoordinate.y - normalizeCoordinate.y),
        };

        return polygon.map((point) => {

            point.x = ((point.x - normalizeCoordinate.x) * adjustment.x) + WALL_DEPTH;
            point.y = ((point.y - normalizeCoordinate.y) * adjustment.y) + WALL_DEPTH;
            return point;
        });
    }


    function getNormalizedDoor(door: Door, wallLine: any, wallIndex: number, room: RoomData) {
        const doorNormalized: Door = JSON.parse(JSON.stringify(door));

        const wallIndexNext = (wallIndex + 1) % roomCoords.length;
        const wall2d = createVectorObject(roomCoords[wallIndex], roomCoords[wallIndexNext]);

        const ratio2d3d = wallLine.inner.vector.length() / wall2d.vector.length();
        doorNormalized.origin.x = (door.origin.x - roomRect.origin.x) * ratio2d3d;
        doorNormalized.origin.y = (door.origin.y - roomRect.origin.y) * ratio2d3d;
        doorNormalized.length = door.length * ratio2d3d;
        return doorNormalized;
    }

    function getWallBaseline(wall: Wall3D) {
        const inner = createVectorObject(wall.coordinates[3], wall.coordinates[2]);
        const outer = createVectorObject(wall.coordinates[0], wall.coordinates[1]);
        return { outer, inner };
    }


    function getWallsCoordinates(polyCoords: Point[], innerCoords: Point[]): Point[][] {
        const polygonPoints: Point[][] = [];
        for (let i = 0; i < polyCoords.length; i++) {
            const thisWall: Point[] = [];
            const next = (i + 1) % polyCoords.length;
            thisWall.push(innerCoords[i]);
            thisWall.push(innerCoords[next]);
            thisWall.push(polyCoords[next]);
            thisWall.push(polyCoords[i]);
            polygonPoints.push(thisWall);
        }
        return polygonPoints;
    }

    function calculateDoorPoint(onLine: VectorObject, wallLine: VectorObject, from: Victor) {
        const doorVector = from.clone().subtract(wallLine.start);
        const doorPoint = onLine.vector.clone().norm()
            .multiplyScalar(doorVector.length() * (onLine.vector.length() / wallLine.vector.length()))
            .add(onLine.start);
        doorPoint.x = doorPoint.x;
        doorPoint.y = doorPoint.y;
        return doorPoint;
    }
    function sortDoorPoints(door: Door, wallLine: any): [Victor, Victor] {
        let doorStart = Victor.fromObject(door.origin);
        // doorStart.subtract(wallLine.start); // get vector in reference to inner wall prespective
        let doorEnd = new Victor(door.length, 0);
        doorEnd.rotateDeg(door.orientation);
        doorEnd.add(doorStart);
        doorStart.subtract(wallLine.start);
        doorEnd.subtract(wallLine.start);
        [doorStart, doorEnd] = doorStart.length() < doorEnd.length() ? [doorStart, doorEnd] : [doorEnd, doorStart];
        doorEnd.add(wallLine.start).addScalar(WALL_DEPTH);
        doorStart.add(wallLine.start).addScalar(WALL_DEPTH);
        doorStart.x = doorStart.x; doorStart.y = doorStart.y;
        doorEnd.x = doorEnd.x; doorEnd.y = doorEnd.y;
        return [doorStart, doorEnd];
    }

    Number.prototype.round = function(p) {
        p = p || 10;
        return parseFloat( this.toFixed(p) );
      };

    function getDoorLineVector(doorHeight: number = 0.8, wall: Wall3D): VectorObject {
        const lineVectors = {
            topStart: Victor.fromObject(wall.coordinates[0]),
            topEnd: Victor.fromObject(wall.coordinates[1]),
            baseEnd: Victor.fromObject(wall.coordinates[2]),
            baseStart: Victor.fromObject(wall.coordinates[3]),
        };

        const startLineVector = lineVectors.topStart.clone().subtract(lineVectors.baseStart);
        const endLineVector = lineVectors.topEnd.clone().subtract(lineVectors.baseEnd);

        const doorLine: VectorObject = createVectorObject(
            startLineVector.clone().multiplyScalar(doorHeight).add(lineVectors.baseStart),
            endLineVector.clone().multiplyScalar(doorHeight).add(lineVectors.baseEnd),
        );

        return doorLine;
    }
    function isConcave(vThis: any, vPrev: any) {
        const vPrevRev = vPrev.multiply(new Victor(-1, -1));
        const angle = vThis.horizontalAngleDeg() - vPrevRev.horizontalAngleDeg();
        if ((0 < angle && angle < 180) || (-360 < angle && angle < -180)) {
            return false;
        } else {
            return true;
        }
    }

    function createVectorObject(start: Point, end: Point): VectorObject {
        const vector: VectorObject = {
            start: Victor.fromObject(start),
            end: Victor.fromObject(end),
            //@ts-ignore
            vector: undefined,
        };
        vector.vector = vector.end.clone().subtract(vector.start);
        return vector;
    }


    return (

        <svg className="room-blue-print" preserveAspectRatio="xMinYMin meet" version="1.1" viewBox="0 0 100 100" width="100%" height="100%"
            fill="#000" xmlns="http://www.w3.org/2000/svg">

            {

               outerCoords!==[]&&<polygon className="outer-polygon" points={Plotter.getStringFromPoints(outerCoords)}>
               
               </polygon>

            }
            {walls !== [] && walls.map((wall) => {
                <polygon  /** fill={`url(#wall-gradient-"${wall.angle}`}**/></polygon>
            })}
            {
                //@ts-ignore
                roomPolygon !== undefined && <polygon className={`floor ${room.floor}`} ></polygon>
            }
            {
                doors !== undefined && doors !== null && doors.map((door: any) => {
                    <polygon className="door"  fill="#966F33" /**filter="url(#doorShadow)" **/ ></polygon>
                })
            }


        </svg>


    );
}