images = require('images')

//maybe - support an unfixed number of folders

//todo - use os package to get the files inside the folders
let backgrounds = ["imgs/background/square-1.png", "imgs/background/square-2.png"]
let middlegrounds = ["imgs/middleground/pentagon-1.png", "imgs/middleground/pentagon-2.png"]
let foregrounds = ["imgs/foreground/circle-1.png", "imgs/foreground/circle-2.png"]
let extras = ["imgs/extras/extra-1.png", "imgs/extras/extra-2.png"]

const combine = ([head, headTail, ...tailTail]) => {
    if (!headTail) return head
    if(!Array.isArray(head[0])) head = head.map(i => [i])

    head = head.flatMap(c => headTail.map(b => c.concat(b)))

    return combine([head, ...tailTail])
    
    // if (!headTail) return head

    // let combinated;
    // if(Array.isArray(head[0])){
    //     combinated = head.flatMap(a=> headTail.map(b => a.concat(b)))
    // }
    // else{
    //     combinated = head.flatMap(a=> headTail.map(b => [a,b]))
    // }
    // return combine([combinated, ...tailTail])
}

let combinations = combine([
    backgrounds,
    middlegrounds,
    foregrounds
])


console.log("output:",combinations, combinations.length)

// for (let i = 0; i < combinations.length; i++) {
//     let imgs = combinations[i]
    
//     let image = images(imgs[0])
//     for (let j = 1; j < imgs.length; j++) {
//         image.draw(imgs[j], 0, 0)
//     }
//     image.save(`outputs/output.png`);
// }

// //todo - optize this using foreachs
// for (i = 0; i < backgrounds.length; i++) {
//     const background = backgrounds[i];
//     for (j = 0; j < backgrounds.length; j++) {
//         const middleground = middlegrounds[j];
//         for (k = 0; k < foregrounds.length; k++) {
//             const foreground = foregrounds[k];
//             images(background)
//             .draw(images(middleground), 0, 0)
//             .draw(images(foreground), 0, 0)
//             .save(`outputs/output${i}-${j}-${k}.png`);
//         }
//     }
// }

