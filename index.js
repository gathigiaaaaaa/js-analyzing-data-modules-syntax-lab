function combinedUsers(...args) {
    let combinedObject = {
        users: []
    };

    for (let arr of args) {
        combinedObject.users.push(...arr);
    }

    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    combinedObject.MergeDate = formattedDate;

    return combinedObject;
}

// Example
console.log(combinedUsers(['alice', 'bob'], ['charlie'], ['eve']));