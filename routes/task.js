//rota de tasks com express
const express = require("express");
const z = require("zod");
const { findAllTasks } = require("../database/tasks");

const router = express.Router();

router.get("/tasks", async (req, res) => {
    const tasks = await findAllTasks();
    res.json({
        tasks,
    })
})

module.exports = router;