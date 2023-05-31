const prisma = require("./prisma")

const findAllTasks = () => {
    return prisma.task.findMany();
};

const saveTask = () => {
    return prisma.task.create({
        data: {
            name_task: task.name_task,
            description: task.description,
            is_done: task.is_done,
            user: {
                connect: {
                    id: userId,
                }
            }

        }
    })
}

module.exports = {
    findAllTasks,
    saveTask,
};