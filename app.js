function myArray() {
    this.c = [];
    //  return this;

}

myArray.prototype.push = function(obj) {
    var size = this.c.length;
    // console.log(size);
    if (!size) {
        this.c[0] = obj;
    } else {
        this.c[this.c.length] = obj;
    }
};

myArray.prototype.pop = function() {
    var data = this.c[this.c.length - 1];
    this.c.length = this.c.length - 1;
    return data;
};





myArray.prototype.shift = function() {

    for (var i = 0; i < this.c.length; i++)
        this.c[i] = this.c[i + 1];
    this.c.length = this.c.length - 1;
};

myArray.prototype.unshift = function(obj) {
    this.c.length = this.c.length + 1;
    for (var i = this.c.length - 1; i > 0; i--) {
        this.c[i] = this.c[i - 1];
    }
    this.c[0] = obj;
};

myArray.prototype.foreach = function(myFunc) {
    for (var i = 0; i < this.c.length; i++) {
        myFunc(this.c[i]);
    }


};

myArray.prototype.toString = function() {
    var myString = "[";
    for (var i = 0; i < this.c.length; i++) {
        var key = Object.keys(this.c[i]);
        var value = this.c[i][key];
        //console.log(key + " " + value);
        if (i == this.c.length - 1)
            myString += '"' + key + '"' + ':' + '"' + value + '"';
        else
            myString += '"' + key + '"' + ':' + '"' + value + '",';

    }
    //  console.log(myString[2]);
    myString += "]";
    //console.log(myString);
    return myString;
};

var listMe = new myArray();
listMe.push({ "a": "123454" });
//console.log(listMe);
listMe.push({ "b": "22222" });
listMe.push({ "c": "55555" });
listMe.push({ "d": "7777" });
listMe.shift();
listMe.unshift({ "e": "54545454" });
listMe.toString();
listMe.foreach(console.log);