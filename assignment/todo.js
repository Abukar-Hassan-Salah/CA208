// this creating our file system to work and use our paths
const fs = require('fs');
const { normalize } = require('path');

class TodoList {
  constructor() {
    this.todos = [];
    this.loadTodos();
  }

  loadTodos() {
    try {
      const data = fs.readFileSync('data.json', 'utf8');
      this.todos = JSON.parse(data);
    } catch (err) {
      console.log('Error loading todo data:', err.message);
    }
  }

  saveTodos() {
    try {
      fs.writeFileSync('data.json', JSON.stringify(this.todos, null, 2), 'utf8');
    } catch (err) {
      console.log('Error saving Task data:', err.message);
    }
  }

  addTodo(Task) {
    const todo = {
      id: Math.ceil(Math.random() * 1000),
      Task
    };
    this.todos.push(todo);
    this.saveTodos();
    console.log('Si Saxan Ayaa Wax Loogu daray!!!');
  }

  updateTodo(id, Task) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.Task = Task;
      try {
        fs.writeFileSync('data.json', JSON.stringify(this.todos, null, 2), 'utf8');
      } catch (err) {
        console.log('Error saving Task data:', err.message);
      }
      console.log('Si Saxan Ayaa Loo Cusbooneysiyey!!!');
    } else {
      console.log('Lama Helin Shaqadaan!');
    }
  }

  deleteTodo(id) {
    const index = this.todos.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
      console.log('Sixan Ayaa Loo tirtirey!!!');
    } else {
      console.log('Shaqadaan lama helin!');
    }
  }
// this is for showing what is in our dolist looking for its length
  showTodos() {
    if (this.todos.length === 0) {
      console.log('Shaqadaan lama helin!');
    } else {
      console.log('Dhamaan shaqooyin');
      console.log('________')
      this.todos.forEach((todo) => {
        console.log(`ID: ${todo.id}`);
        console.log(`Task: ${todo.Task}`);
        console.log('________');
      });
      console.log('_______________________');
    }
  }
}

module.exports = TodoList;