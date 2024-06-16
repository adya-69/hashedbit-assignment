var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );