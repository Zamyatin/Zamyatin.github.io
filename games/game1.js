var position = [12, 3, 6, 9]

var ship = {
	position: [],
	ammo: 10
}

var asteroid = {
	hitPoints: 3,
	position: []
}

var bullet = {
	damage: 1
}

function startAsteroid(){
	asteroid.position = position[Math.floor(Math.random()*position.length)];
}

function startShip(){
	ship.position = position[Math.floor(Math.random()*position.length)];
}

function fireWeapons(){
	if (ship.position === asteroid.position) {alert("That's a HIT!");
		ship.ammo -= 1;
		issueDamage();
		asteroid.hitpoints = asteroid_name.hitPoints - bullet.damage;
		reportStatus(asteroid)}
	else if (ship.position !== asteroid.position) {alert("OH! So close! Sadly, your shot has missed");
		ship.ammo -=1}
}

function issueDamage(){
	asteroid.hitpoints = asteroid_name.hitPoints - bullet.damage;
		reportStatus();
}

function reportStatus(spaceObject){
	if (spaceObject.hitpoints <= 0) alert("KABOOM! The asteroid vaporizes before your eyes! You WIN!!!");
	else alert("You see a flash! The asteroid has" + spaceObject.hitpoints + "left! The shot has undoubtedly changed the trajectory of the Asteroid!");
		rotateRight(asteroid);
}

function rotateRight(spaceObject){	
	index = position.indexOf(spaceObject.position)
	if(index >= 0 && index < position.length - 1)
		spaceObject.position = position[index + 1];
	else spaceObject.position = position[0];
}

function rotateLeft(spaceObject){
	index = position.indexOf(spaceObject.position)
	if(index > 0 && index <= position.length - 1)
		spaceObject.position = position[index - 1];
	else spaceObject.position = position[3];
}

function playGame(){
	switch(prompt("You've chased an asteroid headed for Earth into a Nebula! You're flying blind! Would you like to [Fire, RotateRight, RotateLeft, Quit]?", "...")){
	case "Fire": {
	  if (ship.ammo > 0){fireWeapons()}
	  else {alert("OH NO!  You're out of ammo! The asteroid hurdles to your human colony, which is now doomed. Refresh the browser window to have another chance at life!")}};
	case "RotateRight": {rotateRight()};
	case "RotateLeft": {rotateLeft()};
	case "Quit": break;
	default: console.log("That's not one of the options! Think fast, StarFighter!"); break;
	}
}

startAsteroid();
startShip();
while (asteroid.hitPoints > 0 || ship.ammo > 0){playGame()}