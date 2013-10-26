Parse.initialize("LrxZEg33o9tPY6NcDdOieNANn5gyzU1TPESlUsBY", "Ba5dFxRgsPXSo26NBNEX6D7mH5RsVALe64oxrtYn");


var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});
