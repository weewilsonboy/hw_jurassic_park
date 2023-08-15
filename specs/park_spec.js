const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Brontosaurus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('Pterodactyl', 'carnivore', 450);
    dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 20);
    dinosaur5 = new Dinosaur('Diplodocus', 'herbivore', 35);
    dinosaur6 = new Dinosaur('T-Rex', 'carnivore', 50);


    park = new Park("Jurassic Park", 200, [dinosaur1, dinosaur2, dinosaur3, dinosaur4])

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");

  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 200);

  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoList;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);

  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur5)
    const actual = park.dinoList[4];
    assert.strictEqual(actual, dinosaur5);

  });

  it('should be able to remove a dinosaur from its collection', function(){

    park.removeDino(dinosaur4)
    const actual = park.dinoList;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.popular()
    assert.strictEqual(actual, dinosaur3)

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur6);
    const actual = park.findSpecies("T-Rex");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur6]);



  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
