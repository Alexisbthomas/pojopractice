const pet = {
    "name": "Buddy",
    "species": "Dog",
    "age": 5
};

console.log(pet.name);
console.log(pet.species);
console.log(pet.age);

pet.age = 6;
console.log(pet.age);

// TODO: What do you think each console.log will print?

const book = {
    "title": "JavaScript for Beginners",
    "author": "Jane Doe",
    "pages": 250,
    "isPublished": true
};

// TODO: Name labels everything on left side
// TODO: Everything on Right side

const pet1 = {
    "name": "Buddy",
    "species": "Dog",
    "age": 5
};

console.log(pet1);

// Values Buddy, Dog, 5

const sprite1 = {
    "name": "Hero",
    "x": 100,
    "y": 200
};

console.log(sprite1);

// TODO: Name of the sprite is Hero and x/y are the coordinates

const car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2020,
    "color": "Blue"
};

// TODO: Fix the syntax error.
// TODO: Explain what was wrong in a comment.
console.log(car);

const sprite = {
    "name": "Hero",
    "x": 100,
    "y": 200
};

console.log(sprite.x);
sprite.x = 150;
console.log(sprite.x);

sprite.y = 250;
console.log(sprite.y);

// TODO: x:100/y:200

const book1 = {
    "title": "JavaScript for Beginners",
    "author": "Jane Doe",
    "pages": 250,
};

console.log(book1.pages);
book1.pages=300;
console.log(book1.pages);
// 
// TODO: Update pages to 300.
// TODO: Print pages again to confirm update.

const book2= {
  "title":"Hooked on Phonics",
  "author":"Public Broadcasting Service",
  "pages":150,

}
console.log(book2.title);
console.log(book2.author);
book2.pages=200;
console.log(book2);

const pet3={
    "name": "Billy",
    "species": "Bully",
    "age":"3"
}
console.log(pet3.species);
pet3.age=4;
console.log(pet3.name);
console.log(pet3.age);

const sprite2={
    "name":"Custom",
    "x":"150",
    "y":"350",
}

console.log(sprite2.x);
console.log(sprite2.y);
sprite2.x=200;
sprite2.y=300;
console.log(sprite2.x);
console.log(sprite2.y);

const player = {
    "name": "Alex",
    "score": 0,
    "level": 1
};
player.score=10;
player.level=2;
console.log(player);
// TODO: Increase score by 10.
// TODO: Increase level by 1.
// TODO: Print name, score, and level.

const weather = {
    "city": "Taipei",
    "temperature": 30,
    "isRaining": false
};
weather.temperature=35;
weather.isRaining=true;
console.log(weather);

// TODO: Increase temperature by 5.
// TODO: Change isRaining to true.
// TODO: Print city, temperature, isRaining.
const robot = {
    "id": "R2D2",
    "x": 0,
    "y": 0,
    "direction": "north"
};
robot.y=10;
robot.x=5;
robot.direction="East";
console.log(robot);

// TODO: Move y by +10.
// TODO: Move x by +5.
// TODO: Change direction to "east".
// TODO: Print id, x, y, direction.