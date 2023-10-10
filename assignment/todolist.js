const readline = require('readline');
const fs = require('fs');

const todoListFile = 'todoList.json';

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the Todo List
function displayTodoList() {
  try {
    const data = fs.readFileSync(todoListFile, 'utf8');
    const todoList = JSON.parse(data);
    if (todoList.length === 0) {
      console.log('Todo List is empty.');
    } else {
      console.log('Todo List:');
      todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  } catch (error) {
    console.log('Unable to read Todo List.');
  }
}

// Function to add a task to the Todo List
function addTask(task) {
  try {
    const data = fs.readFileSync(todoListFile, 'utf8');
    const todoList = JSON.parse(data);
    todoList.push(task);
    fs.writeFileSync(todoListFile, JSON.stringify(todoList));
    console.log('Task added successfully.');
  } catch (error) {
    console.log('Unable to add task.');
  }
}

// Function to update a task in the Todo List
function updateTask(index, updatedTask) {
  try {
    const data = fs.readFileSync(todoListFile, 'utf8');
    const todoList = JSON.parse(data);
    if (index >= 0 && index < todoList.length) {
      todoList[index] = updatedTask;
      fs.writeFileSync(todoListFile, JSON.stringify(todoList));
      console.log('Task updated successfully.');
    } else {
      console.log('Invalid task index.');
    }
  } catch (error) {
    console.log('Unable to update task.');
  }
}

// Function to delete a task from the Todo List
function deleteTask(index) {
  try {
    const data = fs.readFileSync(todoListFile, 'utf8');
    const todoList = JSON.parse(data);
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
      fs.writeFileSync(todoListFile, JSON.stringify(todoList));
      console.log('Task deleted successfully.');
    } else {
      console.log('Invalid task index.');
    }
  } catch (error) {
    console.log('Unable to delete task.');
  }
}

// Function to handle user input and execute the corresponding actions
function handleUserInput() {
  rl.question('Enter a command (add/update/delete/display/exit): ', (command) => {
    switch (command) {
      case 'add':
        rl.question('Enter the task to add: ', (task) => {
          addTask(task);
          handleUserInput();
        });
        break;
      case 'update':
        rl.question('Enter the index of the task to update: ', (index) => {
          rl.question('Enter the updated task: ', (updatedTask) => {
            updateTask(index - 1, updatedTask);
            handleUserInput();
          });
        });
        break;
      case 'delete':
        rl.question('Enter the index of the task to delete: ', (index) => {
          deleteTask(index - 1);
          handleUserInput();
        });
        break;
      case 'display':
        displayTodoList();
        handleUserInput();
        break;
      case 'exit':
        rl.close();
        break;
      default:
        console.log('Invalid command.');
        handleUserInput();
    }
  });
}

// Initialize the Todo List file if it doesn't exist
if (!fs.existsSync(todoListFile)) {
  fs.writeFileSync(todoListFile, '[]');
}

// Start the Todo List application
console.log('Todo List Application');
console.log('---------------------');
handleUserInput();