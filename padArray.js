const pad = (array, minSize, value=null) => {
    let newArray = []
    if (minSize === 0 || minSize < array.length) {
        return array
    } else {
        for (let elem of array) {
            newArray.push(elem)
        }
        while (newArray.length < minSize) {
            newArray.push(value)
        }
    }
    return newArray
}

exports.pad = pad;