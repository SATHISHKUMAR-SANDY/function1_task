// TASK 1

function add_numbers() {
    let a = Number(prompt("ENTER YOUR FIRST NUMBER"));
    let b = Number(prompt("ENTER YOUR SECOND NUMBER"));
    let total = a + b;
    console.log(`${total}`);
   
}
add_numbers()

// METHOD 2

function add_numbers() {
    let a = Number(prompt("ENTER YOUR FIRST NUMBER"));
    let b = Number(prompt("ENTER YOUR SECOND NUMBER"));
    let total = a + b;
    // console.log(`${total}`);
    return total
   
}
add_numbers()
console.log(add_numbers)


// TASK 2

function check_even_or_odd(){
    let value = Number(prompt("ENTER YOUR NUMBER"));
    
    if(isNaN(value)){
        console.log("INVALID INPUT");
    }
    else if(value<=0){
        console.log("PLZ ENTER VALID  INPUT");
    }
    else if(value%2==0){
        console.log(`${value}=>ITS EVEN NUBER`);
    }
    else{
        console.log(`${value}=>ITS A ODD NUMBER`);
    }
}
check_even_or_odd()




// TASAK 3

function check_maxium_number(){
    let num_1 = Number(prompt("ENTER YOUR FIRST NUMBER"));
    let num_2 = Number(prompt("ENTER YOUR SECOND NUMBER"))
 
    if(num_1>num_2){
        console.log(`${num_1}=>IS BIGGEST NUMBER`);
    }
    else if(num_1<num_2){
        console.log(`${num_2}=>IS A BIGGEST NUMBER`);
    }
    else if(num_1==num_2 ){
        console.log(`${num_1} AND ${num_2} IS EQAUL`);
    }
    else{
        console.log("INVALID INPUT");
    }

}
check_maxium_number()



// TASK 4




function concat_string(){
    let string_1 = String(prompt("ENTER YOUR FIRST STRING VALUE"));
    let string_2 = String(prompt("ENTER YOUR SECOND STRING VALUE"));   
    // console.log(`${string_1}${string_2}`);
    // console.log(string_1+string_2);
}
concat_string()




// TASK 5

function factorial_checker(){
    let factorial_number = Number(prompt("ENTER YOUR FACTORIAL VALUE"));
    let factorial_value = 1;
      
    for(i = 1;i<=factorial_number;i++){
        factorial_value*=i;
    }
    console.log(factorial_value)
}

factorial_checker()




// TASK 6


function reverse_string(){
let string_value = String(prompt("ENTER YOUR STRING VALUE"));
let reverse_string = ""

for(i= string_value.length-1;i>=0;i--){  
    reverse_string+=string_value[i];
}
console.log(reverse_string);
}
reverse_string()





let saq = "satuhus"
console.log(typeof(saq));
console.log(saq[3])


// TASK 7

let len = ()=>{
    let arr =[1,2,3,4,5,6,7,8,9,10];
    console.log(arr.length)
}
len()



// TASK 8





function celsiusToFahrenheit() {
    let celsius =Number(prompt("Enter temperature in Celsius:"));
    console.log(celsius * 1.8+ 32);
}

celsiusToFahrenheit()




// TASK 9

let filter_even_array=()=>{
 let arr_1 = [1,2,3,4,5,6,7,8,9,10];
let arr_2=[]
 for(i=0;i<arr_1.length;i++){
    if(arr_1[i]%2==0){
       arr_2+=arr_1[i]
    }
 }
 console.log(arr_2);
}
filter_even_array()










