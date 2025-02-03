const express = require('express')
const app = express()

const profile = {
       name: "Alex Carter", 
       inventory: ["flashlight", "notebook", "rusty key", "map"],
       role: "Detective",
       health: 100,
       stamina: 80,
       profilePic: "https://www.google.com/imgres?q=unknown&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbc%2FUnknown_person.jpg%2F434px-Unknown_person.jpg&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AUnknown_person.jpg&docid=9FAStfHXt_GhwM&tbnid=y13xaj1AO_M9hM&vet=12ahUKEwjTjOzt3KaLAxUWFVkFHX72GO8QM3oECGgQAA..i&w=434&h=480&hcb=2&ved=2ahUKEwjTjOzt3KaLAxUWFVkFHX72GO8QM3oECGgQAA"
}
const room = [
    {
        name: "The Abandoned Library",
        keySpawn: true,
        event: "A dusty book falls from the shelf, revealing a hidden compartment."
    },
    {
        name: "The Underground Laboratory",
        keySpawn: false,
        event: "Strange green liquid bubbles in a cracked beaker, emitting a foul smell."
    },
    {
        name: "The Haunted Hallway",
        keySpawn: true,
        event: "A flickering light reveals a shadow moving on its own."
    },
    {
        name: "The Enchanted Garden",
        keySpawn: false,
        event: "A vine suddenly wraps around your foot before retracting into the soil."
    },
    {
        name: "The Forgotten Cellar",
        keySpawn: true,
        event: "A locked chest sits in the corner, rattling slightly as if something is inside."
    }
]

const randomEvents = [
    {
        event: "A strong gust of wind flips through the pages of an old book, stopping on a peculiar symbol.",
        keySpawn: { location: "inside the hollowed-out book", isFound: false },
        turmoil: { type: "confusion", effect: "Player momentarily forgets previous clues." }
    },
    {
        event: "A power surge causes the lights in the lab to flicker wildly before plunging the room into darkness.",
        keySpawn: { location: "inside a broken test tube rack", isFound: false },
        turmoil: { type: "blindness", effect: "Player must navigate without sight for 30 seconds." }
    },
    {
        event: "A sudden chill fills the hallway, and distant whispers call out your name.",
        keySpawn: { location: "beneath a loose floorboard", isFound: false },
        turmoil: { type: "fear", effect: "Player’s heartbeat increases, causing shaky movement." }
    },
    {
        event: "A mysterious flower in the garden releases a glowing mist, making the air feel thick and heavy.",
        keySpawn: { location: "inside a tree hollow", isFound: false },
        turmoil: { type: "hallucination", effect: "Player briefly sees non-existent pathways." }
    },
    {
        event: "A loud thud echoes from the locked chest in the cellar, as if something inside is trying to escape.",
        keySpawn: { location: "behind a loose stone in the wall", isFound: false },
        turmoil: { type: "paranoia", effect: "Player hears random noises, making them second-guess surroundings." }
    }
]

   


   app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

app.use(express.static(__dirname + "/public"))


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/home.html")
})












 
   app.use((request, response, next)=>{
    response.send(`404 not found!`)
    next()
    })

   app.listen(3000, () => {
  console.log("Server running")
})