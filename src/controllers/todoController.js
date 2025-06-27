import { Todo } from "../models/todoModel.js";

//create a todo
export const createTodo = async(req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = await Todo.create({
            title,
            description
        })
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}





//read all Todo
export const getTodo  = async(req,res) => {
    try {
        const todos = await Todo.find();
        res.status(201).json(todos)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


//read one
export const getTodoById = async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.status(201).json(todo)
}


//update
export const updateTodo = async(req,res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.json(updateTodo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


//delete
export const deleteTodo = async() => {
    try {
        const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json({message : "Todo Deleted"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

