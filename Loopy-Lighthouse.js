var loopyLightHouse = function (){
  for (var i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      console.log("Loopy");
    }else if (i % 4 === 0) {
      console.log("Lighthouse");
    }else if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    };
    console.log(i);
  };
};
loopyLightHouse();

//  The for...of loop
let data = [1,2,3,4,5]

let result = function (){
  for (let val of data){
      console.log(val);
  }
}

result();
