function oldestPerson(x){
  var people = x;
  var highestAge = 0;
  //var name = [];
  for(var i in people){
    if(people[i] > highestAge)
      highestAge = people[i];
  }
  for( var y in people){
    if(people[y] === highestAge){
      return y;
    }
  }
}

oldestPerson({"Tim":25,"Emily":24});

function longestWord(word){
  words = word.split(" ");
  longestWordIndex = 0;

  for( var i in words){
    if( words[i].length > words[longestWordIndex].length){
    longestWordIndex = i;
      }
    }
  return words[longestWordIndex];
  }

longestWord("What is the longest woooooooooord");

function longestWordNoPunk(word){
  word = word.replace(/[^\w\s]|_/g, "");
  words = word.split(" ");
  longestWordIndex = 0;

  for( var i in words){
    if( words[i].length > words[longestWordIndex].length){
    longestWordIndex = i;
      }
    }
  return words[longestWordIndex];
  }

longestWordNoPunk("What is the longest woooooooooord?");


function factorial(number){
  if( number === 0){
    return 1;
  }
  return number * factorial(number -1);
}

factorial(0);

function palindrome(x){
  var pally =  x.split('').reverse().join('');
  if(pally.toLowerCase() === x.toLowerCase()){
    return [pally,true];
  }else{
    return [pally,false];
  }
}

palindrome("Mim");
