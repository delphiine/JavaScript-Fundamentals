const printHello = () => {
    console.log('Hello!');
  }

  const executeAfterDelay = (timeInSeconds, callbackFunction) => {
    setTimeout(callbackFunction, timeInSeconds * 1000);
  }
  
  executeAfterDelay(5, printHello);