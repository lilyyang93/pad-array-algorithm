def pad(array, min_size, value=None):
    newArr = []
    if len(array) >= min_size:
        return array
    elif min_size == 0:
        return array
    else:
        for elem in array:
            newArr.append(elem)
        while len(newArr) < min_size:
            newArr.append(value)
    return newArr
