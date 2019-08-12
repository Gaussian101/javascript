class Bunny{
    constructor(name, hops){
        this._name = name;
        this._hops = hops;
    }
    get name() {
        return this._name;
    }
    get hops() {
        return this._hops;
    }
    increaseHops() {
        this._hops++;
    }
}

const rosie = new Bunny("Rosie", 0);
const lizzie = new Bunny("Lizzie", 0)
rosie.increaseHops();
console.log(rosie.name + " " + rosie.hops);
console.log(lizzie.name + " " + lizzie.hops);
rosie.increaseHops();
console.log(rosie.name + " " + rosie.hops)