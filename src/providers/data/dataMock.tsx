const rooms: RoomData[] = [];
rooms.push({
  type: 'balcony',
  label: {
    name: 'Outdoor',
  },
  coordinates: {
    type: 'polygon',
    points: '5,0 15,0 15,90 90,90 90,99 5,99',
  },
  roomId: 12,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'water_pump',
    x: 90,
    y: 95,
    rotate: 180,
    deviceId: 1,
    scale: 1,
  }],
});

rooms.push({
  "type": "balcony",
  "label": {
    "name": "Balcony"
  },
  "coordinates": {
    "type": "rect",
    "origin": {
      "x": 15,
      "y": 0
    },
    "w": 75,
    "h": 5
  },
  
  "roomId": 1,
  "active": false,
  "floor": "wooden"
});

rooms.push({
  type: 'bedroom',
  label: {
    name: 'Bedroom_1',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 5,
    },
    w: 38,
    h: 20,
  },
  roomId: 2,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'fan',
    x: 50,
    y: 50,
    rotate: 270,
    deviceId: 1,
    scale: 0.90,
  }, {
    type: 'wall_lamp',
    x: 92,
    y: 45,
    rotate: 90,
    deviceId: 2,
    scale: 1,
  }, {
    type: 'wall_lamp',
    x: 8,
    y: 45,
    rotate: 270,
    deviceId: 3,
    scale: 1,
  }, {
    type: 'socket',
    x: 90,
    y: 35,
    rotate: 90,
    deviceId: 4,
    scale: 1,
  }, {
    type: 'socket',
    x: 40,
    y: 89,
    rotate: 180,
    deviceId: 5,
    scale: 1,
  }, {
    type: 'tubelight',
    x: 50,
    y: 94,
    rotate: 0,
    deviceId: 2,
    scale: 1,
  }],
  decorations: [{
    type: 'bed',
    x: 35,
    y: 47,
    rotate: 270,
  }],
});

rooms.push({
  type: 'bedroom',
  label: {
    name: 'Bedroom_2',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 53,
      y: 5,
    },
    w: 37,
    h: 20,
  },
  roomId: 3,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'fan',
    x: 50,
    y: 50,
    rotate: 270,
    deviceId: 1,
    scale: 0.90,
  }, {
    type: 'wall_lamp',
    x: 92,
    y: 45,
    rotate: 90,
    deviceId: 2,
    scale: 1,
  }, {
    type: 'bulb',
    x: 8,
    y: 45,
    rotate: 270,
    deviceId: 3,
    scale: 1,
  }, {
    type: 'socket',
    x: 10,
    y: 35,
    rotate: 270,
    deviceId: 4,
    scale: 1,
  }, {
    type: 'tubelight',
    x: 50,
    y: 6,
    rotate: 180,
    deviceId: 2,
    scale: 1,
  }],
  decorations: [{
    type: 'bed',
    x: 35,
    y: 47,
    rotate: 270,
  }],
});

rooms.push({
  type: 'bathroom',
  label: {
    name: 'BR',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 25,
    },
    w: 20,
    h: 10,
  },
  roomId: 4,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'bulb',
    x: 8,
    y: 80,
    rotate: 270,
    deviceId: 3,
    scale: 1,
  }, {
    type: 'socket',
    x: 90,
    y: 50,
    rotate: 90,
    deviceId: 4,
    scale: 1,
  }, {
    type: 'tubelight',
    x: 60,
    y: 92,
    rotate: 0,
    deviceId: 2,
    scale: 1,
  }, {
    type: 'geyser',
    x: 30,
    y: 90,
    rotate: 180,
    deviceId: 2,
    scale: 1,
  }],
});

rooms.push({
  "type": "bedroom",
  "label": {
    "name": "haha"
  },
  "coordinates": {
    "type": "rect",
    "origin": {
      "x": 35,
      "y": 25
    },
    "w": 10,
    "h": 10
  },
  "roomId": 5,
  "active": true,
  "floor": "wooden"
});

rooms.push({
  type: 'kitchen',
  label: {
    name: 'Kitchen',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 35,
    },
    w: 30,
    h: 15,
  },
  roomId: 7,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'chandelier',
    x: 50,
    y: 50,
    rotate: 270,
    deviceId: 1,
    scale: 0.80,
  }, {
    type: 'socket',
    x: 50,
    y: 10,
    rotate: 0,
    deviceId: 4,
    scale: 1,
  }, {
    type: 'tubelight',
    x: 50,
    y: 94,
    rotate: 0,
    deviceId: 2,
    scale: 1,
  }, {
    type: 'refrigerator',
    x: 78,
    y: 78,
    rotate: 180,
    deviceId: 2,
    scale: 1,
  }],
  decorations: [{
    type: 'bed',
    x: 15,
    y: 47,
    rotate: 90,
  }],
});

rooms.push({
  type: 'livingroom',
  label: {
    name: '',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 50,
    },
    w: 30,
    h: 10,
  },
  roomId: 8,
  active: false,
  floor: 'wooden',
});

rooms.push({
  type: 'livingroom',
  label: {
    name: '',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 60,
    },
    w: 10,
    h: 10,
  },
  roomId: 9,
  active: false,
  floor: 'wooden',
});
rooms.push({
  type: 'bathroom',
  label: {
    name: 'BR',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 25,
      y: 60,
    },
    w: 20,
    h: 10,
  },
  roomId: 9,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'bulb',
    x: 50,
    y: 10,
    rotate: 0,
  }, {
    type: 'bulb',
    x: 70,
    y: 90,
    rotate: 180,
  }, {
    type: 'tubelight',
    x: 92,
    y: 50,
    rotate: 270,
  }, {
    type: 'socket',
    x: 88,
    y: 35,
    rotate: 90,
  }],
});

rooms.push({
  type: 'livingroom',
  label: {
    name: 'Livingroom_1',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 45,
      y: 25,
    },
    w: 45,
    h: 25,
  },
  roomId: 6,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'chandelier',
    x: 50,
    y: 50,
    rotate: 270,
    deviceId: 1,
    scale: 0.80,
  }, {
    type: 'socket',
    x: 35,
    y: 10,
    rotate: 0,
    deviceId: 4,
    scale: 1,
  }, {
    type: 'tubelight',
    x: 50,
    y: 6,
    rotate: 180,
    deviceId: 2,
    scale: 1,
  }, {
    type: 'fan',
    x: 30,
    y: 50,
    rotate: 270,
    deviceId: 3,
    scale: 0.75,
  }, {
    type: 'fan',
    x: 70,
    y: 50,
    rotate: 270,
    deviceId: 4,
    scale: 0.75,
  }, {
    type: 'wall_lamp',
    x: 8,
    y: 40,
    rotate: 270,
    deviceId: 3,
    scale: 1,
  }, {
    type: 'bulb',
    x: 90,
    y: 50,
    rotate: 90,
    deviceId: 3,
    scale: 0.80,
  }],
  decorations: [{
    type: 'table',
    x: 80,
    y: 40,
    rotate: 90,
  }, {
    type: 'table',
    x: 80,
    y: 62,
    rotate: 90,
  }, {
    type: 'table',
    x: 50,
    y: 20,
    rotate: 0,
  }],
});

rooms.push({
  type: 'livingroom',
  label: {
    name: 'Livingroom_2',
  },
  coordinates: {
    type: 'polygon',
    points: '45,50 90,50 90,90 53,90 53,70 45,70',
  },
  roomId: 11,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'fan',
    x: 50,
    y: 25,
    rotate: 270,
    deviceId: 7,
  }, {
    type: 'fan',
    x: 50,
    y: 75,
    rotate: 270,
    deviceId: 8,
  }, {
    type: 'tubelight',
    x: 1,
    y: 20,
    rotate: 90,
  }, {
    type: 'tubelight',
    x: 98,
    y: 50,
    rotate: 270,
  }, {
    type: 'tubelight',
    x: 5,
    y: 80,
    rotate: 90,
  }, {
    type: 'bulb',
    x: 97,
    y: 25,
    rotate: 90,
  }, {
    type: 'bulb',
    x: 97,
    y: 75,
    rotate: 90,
  }, {
    type: 'socket',
    x: 8,
    y: 78,
    rotate: 270,
  }, {
    type: 'socket',
    x: 5,
    y: 20,
    rotate: 270,
  }, {
    type: 'chandelier',
    x: 50,
    y: 50,
    deviceId: 4,
    scale: 0.75,
  }],
  decorations: [{
    type: 'table',
    x: 50,
    y: 30,
    rotate: 90,
    scale: 1,
  }, {
    type: 'table',
    x: 50,
    y: 70,
    rotate: 90,
    scale: 1,
  }, {
    type: 'sofa_1seat',
    x: 65,
    y: 27,
    rotate: 90,
    scale: 0.60,
  }, {
    type: 'sofa_1seat',
    x: 35,
    y: 33,
    rotate: 270,
    scale: 0.60,
  }, {
    type: 'sofa_1seat',
    x: 65,
    y: 66,
    rotate: 90,
    scale: 0.60,
  }, {
    type: 'sofa_1seat',
    x: 35,
    y: 72,
    rotate: 270,
    scale: 0.60,
  }],
});

rooms.push({
  type: 'bedroom',
  label: {
    name: 'Bedroom_3',
  },
  coordinates: {
    type: 'rect',
    origin: {
      x: 15,
      y: 70,
    },
    w: 38,
    h: 20,
  },
  roomId: 10,
  active: true,
  floor: 'wooden',
  devices: [{
    type: 'fan',
    x: 50,
    y: 50,
    rotate: 270,
  }, {
    type: 'tubelight',
    x: 50,
    y: 8,
    rotate: 180,
    scale: 0.80,
  }, {
    type: 'wall_lamp',
    x: 92,
    y: 50,
    rotate: 90,
  }, {
    type: 'socket',
    x: 88,
    y: 35,
    rotate: 90,
  }, {
    type: 'socket',
    x: 8,
    y: 70,
    rotate: 270,
  }],
  decorations: [{
    type: 'table',
    x: 40,
    y: 50,
    rotate: 90,
    scale: 1,
  }],
});

const doors = [];

doors.push({
  origin: {
    x: 42,
    y: 5,
  },
  length: 10,
  orientation: 0,
});

doors.push({
  origin: {
    x: 36,
    y: 25,
  },
  length: 8,
  orientation: 0,
});

doors.push({
  origin: {
    x: 46,
    y: 25,
  },
  length: 6,
  orientation: 0,
});
doors.push({
  origin: {
    x: 54,
    y: 25,
  },
  length: 7,
  orientation: 0,
});
doors.push({
  origin: {
    x: 35,
    y: 26,
  },
  length: 6,
  orientation: 90,
});
doors.push({
  origin: {
    x: 45,
    y: 38,
  },
  length: 8,
  orientation: 90,
});
doors.push({
  origin: {
    x: 45,
    y: 53,
  },
  length: 5,
  orientation: 90,
});
doors.push({
  origin: {
    x: 45,
    y: 61,
  },
  length: 5,
  orientation: 90,
});
doors.push({
  origin: {
    x: 50,
    y: 50,
  },
  length: 12,
  orientation: 0,
});

doors.push({
  origin: {
    x: 70,
    y: 50,
  },
  length: 12,
  orientation: 0,
});
doors.push({
  origin: {
    x: 46,
    y: 70,
  },
  length: 6,
  orientation: 0,
});
doors.push({
  origin: {
    x: 41,
    y: 90,
  },
  length: 11,
  orientation: 0,
});
doors.push({
  origin: {
    x: 41,
    y: 90,
  },
  length: 11,
  orientation: 0,
});
doors.push({
  origin: {
    x: 54,
    y: 90,
  },
  length: 11,
  orientation: 0,
});
doors.push({
  origin: {
    x: 6,
    y: 99,
  },
  length: 24,
  orientation: 0,
});

const entrance = {
  x: 60,
  y: 92,
  length: 15,
  orientation: 270,
};

const data = {
  rooms,
  doors,
  entrance,
};
export default data;
