export class TaskDTO {
    public _id: string;
    public _name: string;
    public _finished: boolean;

    public constructor() {
        this._id = null;
        this._name = null;
        this._finished = null;
    }
}