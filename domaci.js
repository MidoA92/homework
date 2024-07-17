// homework 3

let name= 'admin';
let password= 'tajnasifra';


if(name== 'admin'&& password=='tajnasifra'){
    console.log('Welcome back');
} else if(name=='toma' && password=='tajnasifra'){
    console.log('Welcome Toma');
} else{
    console.log('Wrong password or name');
}


// exercise 3
 let years = 30;

 if(years<=18){
    console.log('Minor');
 } else{
    console.log('Adult');
 }

 let score=[3, 10, 34, 45, 12, 32];

 if(score[0]+ score[-1]> 50){
    console.log('Score is greater than 50');
 }else{
    console.log('Score is less than 50');
 }


 let fruits= 'apple';

 if(fruits== 'apple'){
    console.log('apple');
 } else if(fruits== banana){
    console.log('banana');
 } else{
    console.log('Some other fruit');
 };

 // homework 4

 const dayOfTheWeek = 'monday';

 switch(dayOfTheWeek){
   case 'saturday':
   case 'sunday':
      console.log('Weekend');
      break;
   case 'friday':
      console.log('Weekend is coming');
      break;
   default:
      console.log('Work, work, work....')
 };

 // exercise 4

 let temperature = 23;

 if(temperature< 15){
   console.log("it's cold");
 } else if(temperature>=15 && temperature >= 25){
   console.log("it's medium")
 } else (temperature>25)
   console.log("it's hot!")
 


let timeOfDay= 8;

if(timeOfDay <=9 && timeOfDay >=4){
   console.log("Good Morning");
} else if(timeOfDay >9 &&timeOfDay<= 18 ){
   console.log("good afternoon");
} else if(timeOfDay>18 && timeOfDay>=23){
   console.log("Good evening");
} else{
   console.log("Good night!")
};


let dayOfWeek= 'Sunday';

switch(dayOfWeek){
   case 'Sunday':
   case 'Saturday':
      console.log("It's a weekend!");
      break;
   default:
      console.log("It's a weekday.");
      
};

// homework 5

const cars = [
   'Toyota Camry',
   'Honda Civic',
   'Ford Mustang',
   'Chevrolet Corvette',
   'BMW 3 Series',
   'Mercedes-Benz E-Class',
   'Audi A4',
   'Lexus RX',
   'Subaru Outback',
   'Tesla Model S',
   'Volkswagen Golf',
   'Hyundai Sonata',
   'Kia Soul',
   'Mazda MX-5',
   'Nissan Altima',
   'Volvo XC90',
   'Porsche 911',
   'Jeep Wrangler',
   'Cadillac Escalade',
   'Land Rover Range Rover',
   'Ferrari 488',
   'McLaren 720S',
   'Bugatti Chiron',
   'Bentley Continental GT',
   'Jaguar F-Type',
   'Aston Martin DB11',
   'Maserati Ghibli',
   'Rolls-Royce Phantom',
   'Lotus Evora',
   'Chrysler 300',
   'Acura MDX',
   'Alfa Romeo Giulia',
   'Aston Martin Vantage'
 ];
 
 for (let i = 0; i < cars.length; i++) {
   if (cars[i].startsWith('A')) {
     continue;
   } else {
     console.log(cars[i]);
   }
 }
 
  // exercise 5

  let number =[1, 2, 4, 6, 8, 9, 17, 15]

  for(let i = 0; i<= number.length; i++){
   if(number[i]%2 ==0){
      console.log("number[i] Even")
   } else{
      console.log("number[i] Odd")
   }
  }
 
