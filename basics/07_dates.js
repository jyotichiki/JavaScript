// Dates is object in js

let myDate = new Date()
console.log(myDate);//2024-10-09T05:55:01.994Z

 console.log(myDate.toString());//Wed Oct 09 2024 11:25:01 GMT+0530 (India Standard Time)
 console.log(myDate.toDateString());//Wed Oct 09 2024
 console.log(myDate.toLocaleString());//9/10/2024, 11:25:01 am
 console.log(typeof myDate);//object

 let myCreatedDate1 = new Date(2023, 0, 23)
 let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
 let myCreatedDate3 = new Date("2023-01-14")
 let myCreatedDate4 = new Date("01-14-2023")
 console.log(myCreatedDate1.toLocaleString());//23/1/2023, 12:00:00 am
 console.log(myCreatedDate2.toLocaleString());//23/1/2023, 5:03:00 am
 console.log(myCreatedDate3.toLocaleString());//14/1/2023, 5:30:00 am
 console.log(myCreatedDate4.toLocaleString());//14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

 console.log(myTimeStamp);//1728453302021
 console.log(myCreatedDate4.getTime());//1673634600000
 console.log(Math.floor(Date.now()/1000));//1728453302

let newDate = new Date()
console.log(newDate);//2024-10-09T05:55:02.022Z
console.log(newDate.getMonth() + 1);//10
console.log(newDate.getDay());3

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})