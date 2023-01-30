// Code your solution here

function findMatching(arr, drivername) {
  const drivernames = arr.filter(
    (x) => x.toLowerCase() === drivername.toLowerCase()
  );

  return drivernames;
}



function fuzzyMatch(arr, driverName) {
    const drivernames = [];
    for (let i = 0; i < arr.length; i++) {
      const listName = forLoop(arr[i].toLowerCase());
      const driver = forLoop(driverName.toLowerCase());
      listName.length = driver.length;
      let listNameStr = JSON.stringify(listName);
      let driverStr = JSON.stringify(driver);
      if (listNameStr === driverStr) {
        drivernames.push(arr[i]);
      }
    }
    return drivernames;
  }
  function forLoop(string) {
    const newArr = [];
    for (let i = 0; i < string.length; i++) {
      newArr.push(string[i]);
    }
    return newArr;
  }


function matchName(arrObj, string) {
    const drivernames = arrObj.filter((x) => {
      if (x.name.toLowerCase() === string.toLowerCase()) {
        return x.name;
      }
    });
  
    return drivernames;
  }
  
  console.log(matchName(driversObj, "bobby"));