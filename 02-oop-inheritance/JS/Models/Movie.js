import EventEmitter from "./EventEmitter.js";

export default class Movie extends EventEmitter{
  constructor(title,year,duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.casting = [];
  }
  play(){
    this.emit('play');
  }
  pause(){
    this.emit('pause');
  }
  resume(){
    this.emit('resume');
  }

  addCast(actor){
    if (Array.isArray(actor)) {
      actor.forEach(a => this.casting.push(a));
    } else { 
      this.casting.push(actor);
    }
  }

}