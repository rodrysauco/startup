"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }
  //Receives the name of the event and a function


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(nameEvent, func) {
      //We search the event in the object
      if (this.events[nameEvent]) {
        //We look if the event already has the function
        if (this.events[nameEvent].indexOf(func) != -1) {
          console.log("This function was loaded before");
        } else {
          //We add the function to the event
          this.events[nameEvent].push(func);
        }
      } else {
        //We create an array and assign the function to it.
        this.events[nameEvent] = [func];
      }
    }
    //Receives the name of the event;

  }, {
    key: "emit",
    value: function emit(nameEvent) {
      if (this.events[nameEvent]) {
        var event = this.events[nameEvent];
        //The arrow let us create a one line function in this case
        if (event.length > 0) {
          event.forEach(function (fn) {
            // => : fn of X (function{})
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
  }, {
    key: "off",
    value: function off(nameEvent, func) {
      //We receive the event and the function
      if (this.events[nameEvent]) {
        //We look for the event
        if (this.events[nameEvent].length > 0) {
          //If the event has more than one function
          var idx = this.events[nameEvent].indexOf(func);
          //We remove the item of the array
          this.events[nameEvent].splice(idx, 1);
        } else {
          delete this.events[nameEvent];
        }
      } else {
        console.log("Event not found");
      }
    }
  }]);

  return EventEmitter;
}();

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log(info) {
      console.log('The ' + info + ' event has been emited');
    }
  }]);

  return Logger;
}();

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.casting = [];
    return _this;
  }

  _createClass(Movie, [{
    key: 'play',
    value: function play() {
      this.emit('play');
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.emit('pause');
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.emit('resume');
    }
  }, {
    key: 'addCast',
    value: function addCast(actor) {
      var _this2 = this;

      if (Array.isArray(actor)) {
        actor.forEach(function (a) {
          return _this2.casting.push(a);
        });
      } else {
        this.casting.push(actor);
      }
    }
  }]);

  return Movie;
}(EventEmitter);

"use strict";

var social = {
  share: function share(friendName) {
    console.log(friendName + " shares " + this.title);
  },
  like: function like(friendName) {
    console.log(friendName + " likes " + this.title);
  }
};

let deadPool = new Movie("DeadPool",2015,109);
Object.assign(deadPool,social);
let logger = new Logger();
deadPool.on('play',logger.log);
deadPool.on('pause',logger.log);
deadPool.on('resume',logger.log);
deadPool.off('resume',logger.log);
deadPool.off('foo',logger.log); //This will fail
deadPool.play();
deadPool.pause();
//We erased the function asociated with this key before
deadPool.resume(); 
console.log(deadPool.events);

let actor = new Actor('Ryan Reynolds',41);
let otherCast = [
  new Actor("Ed Skrein",35),
  new Actor("T. J. Miller",37),
  new Actor("Morena Baccarin",39),
  new Actor("Gina Carano",36),
  new Actor("Leslie Uggams",75),
  new Actor("Brianna Hildebrand",21),
  new Actor("Stefan Kapicic",39)
];
deadPool.addCast(otherCast);
deadPool.addCast(actor);
console.log(deadPool.casting);

deadPool.share("Ariel Ganduglia");
deadPool.like("Sebastian de la Fuente");
deadPool.share("Javier Constanzo");