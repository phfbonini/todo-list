const prisma = require("./prisma")

const findAllTasks = () => {
    return prisma.task.findMany();
};

module.exports = {
    findAllTasks,
};