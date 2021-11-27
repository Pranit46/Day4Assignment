
//How to compare two JSON have the same properties without order? 
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

    
console.log( _.isEqual(obj1, obj2) );

// Lodash isEqual() method is the best way to compare two JSON object.
// This will not consider the order of the keys in object and check for the equality of object


async function getData(){
   const data = await fetch('https://restcountries.com/v3.1/all',{method:"GET"});
   const country = await data.json();
   console.log(country);
   
   // To print the name of country in console.
   country.map((e)=> console.log("Country Name " + e.name.common +  ", region is " +e.region
   + ", Subregion is "+e.subregion
   + ", population is "+e.population
   ))
}

  getData();