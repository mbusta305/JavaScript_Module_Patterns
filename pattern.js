//module patterns in JavaScript

//declare function
!(function(){

foo(){
  console.log("foobar");
};

//envoke function
foo();

}();

//importing vairables and using it locally
!function(_) {
  underscore.someawesomemethod = "YAY"
  console.log("underscore.VERSION");
};



var awesomeNewModule = (function)(exports){
  var exports = {
    foo: 5,
    bar: 10
  };
  exports.helloMars = function(){
    console.log("Hello Mars");
  };
  exports.goodbye = function(){
    console.log("GoodBye");
  };
  return exports
} (awesomeNewModule || {}));
