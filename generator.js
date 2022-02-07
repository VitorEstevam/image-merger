
const combine = ([head, headTail, ...tailTail]) => {
    if (!headTail) return head
    if (!Array.isArray(head[0])) head = head.map(i => [i])

    head = head.flatMap(c => headTail.map(b => c.concat(b)))

    return combine([head, ...tailTail])
}

const getFileName = (path) => {
    return path.split('/').slice(-1)[0].split('.')[0]
}

const generateImages = (combinations) => {
    for (let i = 0; i < combinations.length; i++) {
        var comb = combinations[i]
        var image = images(comb[0])
        var name = getFileName(comb[0])

        for (let j = 1; j < comb.length; j++) {
            image.draw(images(comb[j]), 0, 0)
            name+=`-${getFileName(comb[j])}`
        }

        image.save(`outputs/${name}.png`);
    }
}

module.exports = {
    combine, generateImages
};