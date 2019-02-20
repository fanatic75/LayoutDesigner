export default class StateProvider {
    customData: any = {};
  
    private _selectedRoom: any = null;
    private _wallAngles: number[] = [];
  
    get selectedRoom() {
      return this._selectedRoom;
    }
  
    set selectedRoom(roomId: RoomData) {
      this._selectedRoom = roomId;
    }
  
    get wallAngles() {
      return this._wallAngles;
    }
  
    addWallAngles(wallAngles: number) {
      this._wallAngles.push(wallAngles);
    }
  }