const isString = (data) => {
    return typeof data != "string" ? false : true
}

const checkString = (input) => {
    let result = ""
    let dataType = isString(input)

    if (dataType === true ) {
        result = "Correct"
    }else{
        result ="Wrong data type, please input string"
    }

    return result
}

const inputArray = (data1, data2) => {
    let result = []
    let check1 = isString(data1)
    let check2 = isString(data2)

    if(check1 === true && check2 === true) {
        result.push(data1)
        result.push(data2)

        return result
    } else {
        return "Failed"
    }
}

const inputObject = (name, email) => {
    let result = {
        name,
        email
    }

    return result
}

module.exports = {
    checkString,
    inputArray,
    inputObject
}