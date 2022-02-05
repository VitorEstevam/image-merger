images = require('images')

//maybe - support an unfixed number of folders

//todo - use os package to get the files inside the folders
let backgrounds = ["imgs/background/square-1.png","imgs/background/square-2.png"]
let middlegrounds = ["imgs/middleground/pentagon-1.png","imgs/middleground/pentagon-2.png"]
let foregrounds = ["imgs/foreground/circle-1.png", "imgs/foreground/circle-2.png"]

//todo - optize this using foreachs
for (i = 0; i < backgrounds.length; i++) {
    const background = backgrounds[i];
    for (j = 0; j < backgrounds.length; j++) {
        const middleground = middlegrounds[j];
        for (k = 0; k < foregrounds.length; k++) {
            const foreground = foregrounds[k];
            images(background)
            .draw(images(middleground), 0, 0)
            .draw(images(foreground), 0, 0)
            .save(`outputs/output${i}-${j}-${k}.png`);
        }
    }
}

