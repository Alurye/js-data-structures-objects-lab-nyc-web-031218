// Write your solution in this file!
driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    const updatedDriver = {...driver}
    updatedDriver[key] = value;
    return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver,key) {
      const deletedDriver = {...driver};
       return delete deletedDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver,key) {

              return delete driver[key];

}
