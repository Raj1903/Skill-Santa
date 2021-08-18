
function foo1()
    {
      return {
          bar: "hello"
      };
    }

    function foo2()
    {
      return
      {
          bar: "hello"
      };
    }

console.log("foo1 returns:");
console.log(foo1()); //it will return hello here
console.log("foo2 returns:");
console.log(foo2());// but here it will not return because we are declaring same variable as in 1st case.

