// write your functions hereww
function sum(x,y){
  return x + y;
};

sum(4,4);

function isEqual(x,y){
  if(x === y){
    return true;
  }else{
    return false;
  }
};

isEqual(5,9);

function discountPercentage(x,y){
  if(y >= 100 || y <= 0){
    return "Warning!"
  }else{
    return x * (y * .01);
  }
};

discountPercentage(100, 20);

function stringCapitalize(string){
  var arr = string.split(" ");
  var cap = [];
  for(var i = 0; i < arr.length; i++){
   cap[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }
  return cap.join(" ");
}

stringCapitalize("hello there buddy");


function evenNumbers(n){
  var even = [];
  for(var x = 0; x < n; x++){
  if( x % 2 === 0){
    even.push(x);
    }
  }
  return even;
}

evenNumbers(36)

function isDivisible(x,y){
  if(x % y === 0){
    return true;
  }else{
    return false;
  }
}

isDivisible(16,8);


function oddNumbers(n){
  var odd = [];
  if(n>=40){
    for(var x = 40; x < n; x++){
      if( x % 2 !== 0){
        odd.push(x);
      }
    }
  }else{
    for(var i = 0; i < n; i++){
      if( i % 2 !== 0){
        odd.push(i);
      }
    }
  }
  return odd;
}

oddNumbers(57);
