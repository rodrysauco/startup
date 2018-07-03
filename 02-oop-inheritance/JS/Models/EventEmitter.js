export default class EventEmitter{
  constructor(){
    this.events = {};
  }
  //Receives the name of the event and a function
  on(nameEvent, func){
    //We search the event in the object
    if(this.events[nameEvent]){
      //We look if the event already has the function
      if(this.events[nameEvent].indexOf(func) != -1){
        console.log("This function was loaded before");
      }else{
        //We add the function to the event
        this.events[nameEvent].push(func);
      }   
    }else{
      //We create an array and assign the function to it.
      this.events[nameEvent] = [func];
    }
  }
  //Receives the name of the event;
  emit(nameEvent){
    if (this.events[nameEvent]) {
      let event = this.events[nameEvent];
      //The arrow let us create a one line function in this case
      if (event.length > 0) {
        event.forEach(fn => { // => : fn of X (function{})
          if (fn) {
            //If the function exists, we call it;
            fn(nameEvent);
          } else {
            console.log("The function doesnt exists");
          }
        });
      } else {
        console.log("Event without a function");
      }
    } else {
      console.log("Event undefined");
    }
  }

  off(nameEvent, func){
    //We receive the event and the function
    if(this.events[nameEvent]){
      //We look for the event
      if(this.events[nameEvent].length > 0){
        //If the event has more than one function
        let idx = this.events[nameEvent].indexOf(func);
        //We remove the item of the array
        this.events[nameEvent].splice(idx,1);
      } else {
        delete this.events[nameEvent];
      }
    } else {
      console.log("Event not found");
    }
  }
}