// Convert the following code into a functional class that produces a dog object

const dog = {
name: 'Scout',
breed: ['Husky', 'German Shepherd'],
age: 4,
happiness: 50,
hunger: 10,
energy: 100,
};

dog['feed'] = function (food) {
if(dog.hunger - food > 0) {
  dog.hunger -= food;
} else {
  dog.hunger = 0;
}
}

dog['play'] = function(time) {
if(dog.happiness + time < 100) {
  dog.happiness += time;
} else {
  dog.happiness = 100;
}

if(dog.energy - time > 0) {
  dog.energy -= time;
} else {
  dog.energy = 0;
}
}

dog['nap'] = function(time) {
if(dog.energy + time < 100) {
  dog.energy += time;
} else {
  dog.energy = 100;
}
}

----
//Function Classes

//declare the dog variable and set it to equal to the function
	//declare the dog object = {info:info}
	//extend(dog obj, dog activities)
	//return dog

//declare dogActivity method
	// feed : {feed argument}
	// play : {play argument}
	// nap : {nap argument}
let Dog = function(name, breed, age, happiness, hunger, energy){
	var obj = {
	  name: name,
      breed: breed,
      age: age,
      happiness: happiness,
      hunger: hunger,
      energy: energy
  	};
	extend(obj, Dog.methods);
	return obj;
}

Dog.methods = {
	feed : function(food) {
	  if(this.hunger - food > 0) {
        this.hunger -= food;
      } else {
        this.hunger = 0;
      }
	},

	play : function(time) {
	  if(this.happiness + time < 100) {
        this.happiness += time;
      } else {
        this.happiness = 100;
	  } 
	  if(this.energy - time > 0) {
  		this.energy -= time;
	  } else {
        this.energy = 0;
      }
    },

     nap : function(time) {
       if(this.energy + time < 100) {
         this.energy += time;
       } else {
         this.energy = 100;
       }
    }
}
