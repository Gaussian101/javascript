class Car{
    constructor(carReg, hoursParked, totalCharge){
        this._carReg = carReg;
        this._hoursParked = hoursParked;
        this._totalCharge = totalCharge;
    }
    get carReg(){
        return this._carReg;
    }
    get hoursParked(){
        return this._hoursParked;
    }
    get totalCharge(){
        return this._totalCharge
    }
    calculateCharge(){
        console.log('test')
        this._totalCharge = (this._hoursToCharge * charge)
        console.log(this._hoursToCharge * charge)
        console.log(this._hoursToCharge)
        console.log(charge)
    }
    increaseHours(){
        this._hoursParked++;
    }
}
class Staff extends Car{
    constructor(carReg, hoursToCharge, id, credits){
        super(carReg);
        this._hoursToCharge = hoursToCharge;
        this._id = id;
        this._credits = credits;
    }
    get id(){
        return this._id;
    }
    get credits(){
        return this._credits;
    }
    calculateCredits(){
        this.hoursToCharge = Car.hoursParked
        console.log(this._hoursToCharge)
        for (let i = this._hoursToCharge; i >= 5; i--){
            this._hoursToCharge -= 5;
            this._credits--;
            console.log(this._hoursToCharge)
        }
        console.log('Test')
        this.calculateCharge()
    }
}
let charge = 1.5
let hoursAvailable
const firstCar = new Car("R3GNUM", 5)
const staff1 = new Staff("R3GNUM1", 5, "ID0001", 5)
staff1.calculateCredits()
console.log(`For ${firstCar.carReg} you parked for ${firstCar.hoursParked} at ${charge} per hour. The total charge is ${firstCar.totalCharge}`)
console.log(`For ${staff1.carReg} you parked for ${staff1.hoursParked} at ${charge} per hour. You have ${staff1.credits} credits. The total charge is ${staff1.totalCharge}`)