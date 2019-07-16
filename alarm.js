let day = "Saturday"
let alarm
// const doesAlarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
//     isAlarm: function() {
//         if (day == "Saturday" || day == "Sunday"){
//             alarm = this.weekendAlarm
//         }
//         else{
//             alarm = this.weekdayAlarm
//         }
//     },
// }

// doesAlarm.isAlarm()
// console.log(alarm)

const doesAlarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
    isAlarm() {
        if (day == "Saturday" || day == "Sunday"){
            alarm = this.weekendAlarm
        }
        else{
            alarm = this.weekdayAlarm
        }
    },
}

doesAlarm.isAlarm()
console.log(alarm)