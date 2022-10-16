function abc(){
    var a = 10;
    function def(){
          var b = 20;
          console.log(b);
    }
   
    return def;
}

abc()();