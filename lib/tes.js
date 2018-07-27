var duplex_1 = require("./duplex");
var o1 = { name: "foo", bar: [{ name: "hello" }] };
var o2 = { name: "foo", bar: [{ name: "hello" }, { name: "world" }] };
console.log(duplex_1.compare(o1, o2));
