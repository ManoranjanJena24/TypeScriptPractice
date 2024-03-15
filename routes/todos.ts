import { Router } from 'express'
import { Todo } from '../models/todo'

const todos:Todo[]=[]
const router = Router()

router.get('/', (req, res, next) => {
    res.status(200).json({todos:todos})
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text:req.body.text
    }

    todos.push(newTodo)
    res.status(201).json({ message: 'Todo created', todo: newTodo })

})

router.put('/todo/:id', (req, res, next) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((item) => item.id === id);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: id,
            text: req.body.text
        };
        return res.status(200).json({
            message: "Todo updated"
        });
    }
   
    res.status(400).json({
       message: "Could not find todo for this id"
   });
});


router.delete('/todo/:id', (req, res, next) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((item) => item.id === id);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(200).json({
            message: "Todo deleted"
        });
    }
   
    res.status(400).json({
       message: "Could not find todo for this id"
   });
});


export default router
