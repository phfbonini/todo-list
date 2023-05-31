//rota de tasks com express
const express = require("express");
const z = require("zod");
const { findAllTasks, saveTask } = require("../database/task");
const { task } = require("../database/prisma");

const router = express.Router();

const TaskSchema = z.object({
    name_task: z.string(),
    description: z.string(),
    is_done: z.boolean().default(false)
});

router.get("/tasks", async (req, res) => {
    const tasks = await findAllTasks();
    res.json({
        tasks,
    });
});

router.post("/task", async (req, res) => {
    try {
        const task = TaskSchema.parse(req.body);
        //await saveTask(task, )
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(422).json({
                message: error.errors,
            });
        }
        
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
    
});

module.exports = router;