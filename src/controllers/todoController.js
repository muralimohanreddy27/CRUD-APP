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
export const getTodo  = () => {}


//read one
export const getTodoById = () => {}


//update
export const updateTodo = () => {}


//delete
export const deleteTodo = () => {}

