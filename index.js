const express = require('express')
const app = express()

const profile = {
    name: "Alex Carter",
    inventory: ["flashlight", " notebook", " rusty key", " map"],
    role: "Detective",
    health: 100,
    stamina: 80,
    profilePic: "https://www.google.com/imgres?q=unknown&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbc%2FUnknown_person.jpg%2F434px-Unknown_person.jpg&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AUnknown_person.jpg&docid=9FAStfHXt_GhwM&tbnid=y13xaj1AO_M9hM&vet=12ahUKEwjTjOzt3KaLAxUWFVkFHX72GO8QM3oECGgQAA..i&w=434&h=480&hcb=2&ved=2ahUKEwjTjOzt3KaLAxUWFVkFHX72GO8QM3oECGgQAA"
}
const room = [
    {
        name: "The Abandoned Library",
        keySpawn: true,
        event: "A dusty book falls from the shelf, revealing a hidden compartment.",
        keySpawnLocation: "inside the hollowed-out book",
        falseKeySpawnLocation: "behind the torn wallpaper",
        keySpawnFound: false,
        turmoilType: "confusion",
        turmoilEffect: "Player momentarily forgets previous clues.",
        randomEvent: "A strong gust of wind flips through the pages of an old book, stopping on a peculiar symbol."
    },
    {
        name: "The Underground Laboratory",
        keySpawn: false,
        event: "Strange green liquid bubbles in a cracked beaker, emitting a foul smell.",
        keySpawnLocation: "inside a broken test tube rack",
        falseKeySpawnLocation: "beneath a rusted drain cover",
        keySpawnFound: false,
        turmoilType: "blindness",
        turmoilEffect: "Player must navigate without sight for 30 seconds.",
        randomEvent: "A power surge causes the lights in the lab to flicker wildly before plunging the room into darkness."
    },
    {
        name: "The Haunted Hallway",
        keySpawn: true,
        event: "A flickering light reveals a shadow moving on its own.",
        keySpawnLocation: "beneath a loose floorboard",
        falseKeySpawnLocation: "inside an old grandfather clock",
        keySpawnFound: false,
        turmoilType: "fear",
        turmoilEffect: "Player’s heartbeat increases, causing shaky movement.",
        randomEvent: "A sudden chill fills the hallway, and distant whispers call out your name."
    },
    {
        name: "The Enchanted Garden",
        keySpawn: false,
        event: "A vine suddenly wraps around your foot before retracting into the soil.",
        keySpawnLocation: "inside a tree hollow",
        falseKeySpawnLocation: "buried beneath a stone bench",
        keySpawnFound: false,
        turmoilType: "hallucination",
        turmoilEffect: "Player briefly sees non-existent pathways.",
        randomEvent: "A mysterious flower in the garden releases a glowing mist, making the air feel thick and heavy."
    },
    {
        name: "The Forgotten Cellar",
        keySpawn: true,
        event: "A locked chest sits in the corner, rattling slightly as if something is inside.",
        keySpawnLocation: "behind a loose stone in the wall",
        falseKeySpawnLocation: "inside a cracked wine barrel",
        keySpawnFound: false,
        turmoilType: "paranoia",
        turmoilEffect: "Player hears random noises, making them second-guess surroundings.",
        randomEvent: "A loud thud echoes from the locked chest in the cellar, as if something inside is trying to escape."
    }
]

let randomInt = Math.floor(Math.random() * room.length)
let randomRoom = room[randomInt]
function getRandomRoom() {
    let randomInt = Math.floor(Math.random() * room.length)
    let randomRoom = room[randomInt]
    return randomRoom
}

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
})

app.use(express.static(__dirname + "/public"))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/docs", (req, res) => {
    const data = randomRoom
    res.render("overview.ejs", data)
})
app.get("/profile", (req, res) => {
    const data = profile
    res.render("profile.ejs", data)
})
app.get("/room", (req, res) => {
    const data = getRandomRoom()
    res.render("specific.ejs", data)
})


app.get("/docs/room/:event", (req, res) => {
    const event = req.params.event

    const data = room
    res.render("overview.ejs", data)
})








app.use((request, response, next) => {
    response.send(`404 not found!`)
    next()
})

app.listen(3000, () => {
    console.log("Server running")
})