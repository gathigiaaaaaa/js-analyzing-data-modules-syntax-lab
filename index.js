


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
// index.js

function combinedUsers(...args) {
    // Initialize the object
    let combinedObject = {
        users: []
    };

    // Merge all given arrays
    for (let arr of args) {
        combinedObject.users.push(...arr);
    }

    // Get today's date in MM/DD/YYYY format with leading zeros
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    combinedObject.mergeDate = `${month}/${day}/${year}`; // lowercase key

    return combinedObject;
}

// Export the function for the test suite
module.exports = combinedUsers;