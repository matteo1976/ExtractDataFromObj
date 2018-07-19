/**
 * Extract specific data from JSON object :
 
            Main Json: For example, an object has in  response from a web service
            Conpare array: Array where are the keys you looking for in the main jsonFile.
* @see fs
 * @module  UtilityObj.js
 */

let fs = require('fs')

/** @description ricorsive function
                Scan main object and extract a key and value
                that are the same value in compareArray
                return array key-value

 * @param {JSON} contentObj main object json
 * @param {array} compareArray array of values to find
 * @param {array} newObjct  new array with all key/field match
 */
function findValueInObj (contentObj, compareArray, newObjct = []) {
  var myTmpObject = {}// is temporaly object used to append object finded for each scan
  // pars main object
  for (let contentKey in contentObj) {
    // pars compare array
    for (var compareKey in compareArray) {
      if (contentKey === compareArray[compareKey]) { // main.key===compare.value
        myTmpObject[compareArray[compareKey]] = contentObj[contentKey]// write in tmp
      }
    }
    // if find object into main file start ricorsion
    // contentObj[ContentKey]= new oject to pars
    if (typeof contentObj[contentKey] === 'object') {
      findValueInObj(contentObj[contentKey], compareArray, newObjct)
    }
  }
  // add to new object and take off empity object
  if (JSON.stringify(myTmpObject) !== '{}') {
    newObjct.push(myTmpObject)
  }
};

/** @description make pars of an object for delete if there are duplicate key:value 
 *
 * @param {*} Obj  object to controll
 * @returns new array of object without duble key:value
 */
function remuveCopyInObj (Obj) {
  // elimino coppie
  let idx2 = 0
  let idx = 0
  let newObj = []
  for (idx in Obj) {
    var ceck = false
    for (idx2 in newObj) {
      let tmpNewObj = JSON.stringify(newObj[idx2])
      let tmpObj = JSON.stringify(Obj[idx])

      if (tmpNewObj === tmpObj) {
        ceck = true
        break
      }
    }

    if (!ceck) {
      idx2 = newObj.length
      newObj[idx2] = Obj[idx]
    }
  }
  return (newObj)
};

exports.findValueInObj = findValueInObj
exports.remuveCopyInObj = remuveCopyInObj
