const yargs = require("yargs");
const users = require("./usersEx.js");

yargs.command({
    command: "add",
    describe: "Add a new user",
    builder: {
        name: {
            describe: "user name",
            demandOption: true,
            type: "string",
        },
        content: {
            describe: "user content",
            demandOption: true,
            type: "string",
        },
        password: {
            describe: "user password",
            demandOption: false,
            type: "string",
        },
    },
    handler(argv) {
        users.addUser(argv.name, argv.content, argv.password);
    },
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a user",
    builder: {
        id: {
            describe: "user id",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        users.removeUser(argv.id);
    },
});
// Create list command
yargs.command({
    command: "list",
    describe: "List the users",
    handler() {
        users.listUsers();
    },
});
// Create read command
yargs.command({
    command: "read",
    describe: "Read a user",
    builder: {
        id: {
            describe: "user id",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        users.readUser(argv.id);
    },
});
yargs.command({
    command: "update",
    describe: "update a user",
    builder: {
        id: {
            describe: "user id",
            demandOption: true,
            type: "string",
        },
        name: {
            describe: "New user name",
            demandOption: true,
            type: "string",
        },
        content: {
            describe: "New user content",
            demandOption: true,
            type: "string",
        },
        password: {
            describe: "New user password",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        users.updateUser(argv.id, argv.name, argv.content, argv.password);
    },
});

yargs.parse();
