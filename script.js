function validateSyntax() {
    let input = document.getElementById('petInput').value;

    const currentTime = new Date()
    const year = currentTime.getFullYear()
    let result = ""; // Placeholder for validation result

    // Split the input string into parts in order to validate each individually
    const prefix = input.substring(0,4)
    const petBirthYear = input.substring(4,8)
    const petFirstName = input.substring(8,)

    // All checks are required to be true for the syntax to be valid
    if (inputLength(input) === true && petPrefix(prefix) === true && petYear(petBirthYear, year) === true && petName(petFirstName) === true) {
        result = "Valid Syntax 🟢"
    } else {
        result = "Invalid Syntax 🔴"
    }

    document.getElementById('result').innerText = result;
}

// Check that the string is longer than 8 characters ie "pet_2020H"
function inputLength(str) {
    return str.length > 8
}

// Check that the prefix of the string, the first 4 characters, is equal to "pet_"
function petPrefix(str) {
    return /^pet_*$/.test(str)
}

// Check that the following four characters are numbers, and that the year given is equal to or less than the present
/* I could add a check for a minimum year as well, but this gets complex as certain "pets" such as terrrapins can live
up to 70 years according to Google. There are also cases of tortoises living close to 200 years, so I left this out. */
function petYear(str, date) {
    if (/^[0-9]*$/.test(str) === true && Number(str) <= date) {
        return true
    } else {
        return false
    }
}

// Check that the name is only comprised of letters
function petName(str) {
    return /^[A-Za-z]*$/.test(str);
}

