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
		issueDamage()}
	else if (ship.position !== asteroid.position) {alert("OH! So close! Sadly, your shot has missed");
		ship.ammo -=1}
}

function issueDamage(){
	asteroid.hitpoints = asteroid_name.hitPoints - bullet.damage;
		reportStatus();
}

function reportStatus(){
	if (asteroid.hitpoints <= 0) alert("KABOOM! The asteroid vaporizes before your eyes! You WIN!!!");
	else alert("You see a flash! The asteroid has" + asteroid.hitpoints + "left! The shot has undoubtedly changed the trajectory of the Asteroid!");
		moveAsteroid();
}

function moveAsteroid(){
	index = position.indexOf(asteroid.position)
	if(index >= 0 && index < position.length - 1)
		asteroid.position = position[index + 1];
	else asteroid.position = position[0];
}

function rotateRight(){	index = position.indexOf(ship.position)
	if(index >= 0 && index < position.length - 1)
		ship.position = position[index + 1];
	else ship.position = position[0];
}

function rotateLeft(){index = position.indexOf(ship.position)
	if(index > 0 && index <= position.length - 1)
		ship.position = position[index - 1];
	else ship.position = position[3];
}

function playGame(){
 prompt("You've chased an asteroid headed for Earth into a Nebula! You're flying blind! Would you like to [Fire, RotateRight, RotateLeft]?", "...")
  if ("Fire"){
	  if (ship.ammo > 0){fireWeapons()}
	  else {alert("OH NO!  You're out of ammo! The asteroid hurdles to your human colony, which is now doomed. Refresh the browser window to have another chance at life!")}}
  else if ("RotateRight"){rotateRight()}
  else if ("RotateLeft"){rotateLeft()}
  else console.log("That's not one of the options! Think fast, StarFighter!");
}

startAsteroid();
startShip();
while (asteroid.hitPoints > 0){playGame()}