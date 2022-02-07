images = require('images')
generator = require('./generator')

//maybe - support an unfixed number of folders

//todo - use os package to get the files inside the folders
let backgrounds = ["imgs/background/square-1.png", "imgs/background/square-2.png"]
let middlegrounds = ["imgs/middleground/pentagon-1.png", "imgs/middleground/pentagon-2.png"]
let foregrounds = ["imgs/foreground/circle-1.png", "imgs/foreground/circle-2.png"]


let combinations = generator.combine([
    backgrounds,
    middlegrounds,
    foregrounds,
])

generator.generateImages(combinations)