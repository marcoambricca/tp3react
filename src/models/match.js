export default class Match{
    id;
    mascot;
    owner;
    date;
    time;
    description;

    constructor(id, mascot, owner, date, time, description){
        this.id = id;
        this.mascot = mascot;
        this.owner = owner;
        this.date = date;
        this.time = time;
        this.description = description;
    }
}