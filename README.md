# ExtractDataFromObj
js module with two function for help to extract specific data from a JSON object 
###################### /n

Functions for extract specific data drom JSON object, for example the response from a web-service,

function findValueInObj (contentObj, compareArray, newObjct = []) 

the first parameter is the object that you want to extract data ( response from API)

the second parameter is the array of key that you want to extract ( array string)

the third parameter is a new array ( key,value, key,value .....); only with data that are you looking for 

#################

EXAMPLE

################

JSON Object: 

{

  Ke1:value1,
  
  Key2:value2,
  
  key3:{
  
    keyA:valueA,
    
    keyB:valueB,
    
    keyC:{
    
      keyX:X
      
      keyY:Y
      
      KeyZ:Z},
  },
  
  key4:value4,
  
}

#############

CALL FUNCTION

#############

let contentObj=myJSONobject;

let compareArray=['key2','keyB','key4','keyY'];

let newObject=[];

findValueInObj (contentObj, compareArray, newObjct = []) 

console.log(newObject)

*****************************

will be:

*****************************

['key2',value2,'keyB',valueB,'key4',value4,'keyY,valueY']

*********************************
