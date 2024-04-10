let mobile = {
    model  : "xiomi",
    year : 2032,
    ram : "2Gb",
    rom : "123gb",
}
let mobile2 = {
    model : "redmi",
    year : 2022,
    ram : "3gb",
    rom : "55gb"
}

let order ={
    amazon:function(){
        return this.model + "  "+ this.year

   }
}
let order1 ={
    flipkart:function(mobke,dedse){
        return this.ram + "   "+ this.rom +"    "+ this.year + "   "+ this.model +""+ mobke +"  "+ dedse
    }
}


let bill =order1.flipkart.apply(mobile,["3gb","4g"])

console.log(order.amazon.call(mobile2));
console.log(order.amazon.call(mobile));
// console.log(bill.amazon.call(mobile));
console.log(order.amazon.call(mobile));
// console.log(order1.flipkart.apply(mobile,["3gb","4g"]));     apply
// console.log(order1.flipkart.bind(mobile2));                  bind
console.log(bill);


// function data (data1,hxq ){

// console.log(data1,hxq);

// }

// data("dinesh","jjq","bsaxsaj")
// function  mobile3() {
//     let model = [ "dkfools","redmi", "kdjfkd",
//     {
//         kdlf : "kkdjfkd",
//         jfkdkf : "kdjfkd",
//     }]

//     console.log(model[3].kdlf);
// }
// mobile3()

function lap() {
    let arr_model = [ "lenova","apple","hp",
    {
        y_model : 2303,
        price : 38939,
        dis : "10%"
    }]
    console.log(arr_model[3].dis,arr_model[3].price);
}
lap ()

function bike(){
    let TVS = ["appachi","rider","tvs50",{
        y_model: 3000,
        price : 342323,
        dis : "49%"
    }]
 console.log(TVS[3].price,TVS[3].dis);
}
   bike()

   function rider(){
    let rider_125 = ["yellow","blocks","blure",{
        y_model: 3844,
        price: 34343,
        dis : "34%"
    }]
    console.log(rider_125[3].dis,rider_125[3].y_model);
   }
   rider()
   

   function RE (){
    let bike = ["djfkd","kdjfkd","dkjfkdjfkd","dkfjkdjfkd",{
        y_model: "djf",
        price: 334,
        dis : "56%"
    }]
    console.log(bike[4].dis);
   }
   RE()

//    function diclration(apply){
//      let arayofObject = ["arraybox","nammaideas",{
//         functiontab : "cama kuduthu",
//         key : "values"

//      },apply]
//      console.log(arayofObject[indevalue].propertiesvalue);
//    }
//    diclration()

// function RE (){
//     let bike = ["djfkd","kdjfkd","dkjfkdjfkd","dkfjkdjfkd",{    +=>.......>>>>>.....>
//         y_model: "djf",
//         price: 334,
//         dis : "56%",
//     }]
//     // console.log(bike);
//    }
let  RE3 = {
           pr:["jdfjf","dfdfe","deegrgf"],
            y_model: "djf",
            price: 334,
            dis : "56%",
        }

  
// let bii = {
//     gii:function( oee,twww){
//         return this.y_model+ "  "+ this.price+" "+oee+"  "+twww
//     }
// }

// let dog = bii.gii.bind(RE3);
// console.log(bii.gii.call(RE3));
// // console.log(bii.gii.bind(RE3));
// console.log(dog());    => using () -this for bind methord     =>......>..>



// let god = bii.gii.apply( RE3,['334',"owner_dkgools"]);
// console.log(god);    => not use for ()this in apply methrod    =.>..>>>


