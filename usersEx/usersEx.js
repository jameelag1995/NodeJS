const fs = require("fs");
const uniqid = require("uniqid");
const chalk = require("chalk");

const addUser = (name, content, password = "") => {
    const users = loadUsers();
    users.push({
        name,
        content,
        password,
        id: uniqid(),
    });
    saveUsers(users);
    console.log(chalk.green.inverse("New user added!"));
};
const removeUser = (id) => {
    const users = loadUsers();
    const newUsers = users.filter((user) => user.id !== id);
    if (newUsers.length === users.length) {
        console.log(chalk.red.inverse("No such user!"));
    } else {
        saveUsers(newUsers);
        console.log(chalk.green.inverse("user removed!"));
    }
};

const listUsers = () => {
    const users = loadUsers();
    console.log(chalk.inverse.yellow("Users: "));
    users.forEach((user) => console.log(chalk.blue.inverse(user.name)));
};

const readUser = (id) => {
    const users = loadUsers();
    const userToRead = users.find((user) => user.id === id);
    if (userToRead) {
        console.log(chalk.inverse(userToRead.name));
        console.log(userToRead.content);
    } else {
        console.log(chalk.red.inverse("User not found!"));
    }
};

const updateUser = (id, newName, newContent, newPassword) => {
    const users = loadUsers();
    const userToUpdate = users.find((user) => user.id === id);

    if (userToUpdate) {
        userToUpdate.name = newName;
        userToUpdate.content = newContent;
        userToUpdate.password = newPassword;
        const updatedUsers = users.filter(
            (user) => user.id !== userToUpdate.id
        );
        updatedUsers.push(userToUpdate);
        saveUsers(updatedUsers);
        console.log(chalk.inverse.green("User updated successfully!"));
    } else {
        console.log(chalk.inverse.red("User not found!"));
    }
};

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync("users.json");
        return JSON.parse(dataBuffer);
    } catch (error) {
        return [];
    }
};
const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync("users.json", dataJSON);
};

module.exports = {
    addUser,
    removeUser,
    listUsers,
    readUser,
    updateUser,
};
