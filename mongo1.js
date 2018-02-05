//level 1 mongoDB

var db = "use myGame";

db.monsters.insert(
    {
        "name": "LuBu",
        "health": 75,
        "level": 9,
        "lastFought": new Date(2017, 9, 15),
        "attacks": ["smack", "beat", "annihilate"],
        "stats": {"attack": 4, "defense": 4}
    })
    
db.monsters.insert(
    {
        "name": "XiaZhou",
        "health": 70,
        "level": 10,
        "lastFought": new Date(2017, 03, 10),
        "attacks": ["destroy", "smash", "earthquake"],
        "stats": {"attack": 5, "defense": 3}
    })
    
function insertNewMonster(name, health, lastFought, attacks, stats, db) {
    db.monsters.insert({
    "name": "LuBu",
    "health": 75,
    "level": 9,
    "lastFought": new Date(2017, 9, 15),        
    "attacks": ["smack", "beat", "annihilate"],
    "stats": {"attack": 4, "defense": 4}
})

//will show all the docs in the monsters collection
db.monsters.find()
//will console.log all the docs in the collection

//will find monster based on name
db.monsters.find({"name": "LuBu"})

//will find based on attacks
db.monsters.find({"attacks": "beat"})

//will find based on attacks, more than one result
db.monsters.find(
    {"attacks": "beat"},
    {"multi": true}
)

//will find based on a defense stat
db.monsters.find({"stats.defense": 3})

//end level 1

//BEGIN LEVEL 3

//defined above but here for visual clarity
// var db = "use myGame";

var mongo = function(db)  {
    db.monsters.find({ "stats.attack": { $lt: 10 }});
    // returns monsters with an attack < 10 
      
    db.monsters.find({ level: { $gte: 5, $lte: 15 } });  
    // returns monsters with level >= 5 and >= 15
  
    db.monsters.find({ attacks: { $ne: "bite" }});
    // returns monsters with bite attack
    
    db.monsters.find({ level: { $lt: 6 }}, 
    { name: true, level: true, health: true });
    // returns monsters with levels < 6 but only their name, level, and health 
    
    db.monsters.find({ "stats.attack": { $gt: 10, $lt: 20}},
    { health: false, style: false });
    // returns monsters that have attack btwn 10 & 20, but no their health of style data
    
    db.monsters.find();
    // returns total # of monsters
    
    db.monsters.find().sort({ level: -1 });
    // sorts by level, highest at top, like a leaderboard
};

 







}