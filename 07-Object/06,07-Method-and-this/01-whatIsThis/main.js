let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // * John -> this.name == user.name