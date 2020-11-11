export class Point {
    constructor(private _x? : number, private _y? : number) {}
    get x() {
        return this._x        
    }

    set x(value:number) {
        if(value < 0) {
            throw Error("Invalid Value")
        }
        this._x = value;
    }
}