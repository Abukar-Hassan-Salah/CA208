const readline = require('readline');
const TodoList = require('./todo');

// this to create our interface our todolist
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//  this the create instance to our dolist class
const todoList = new TodoList();
// this function tell and show the action that we choice to do task
function Soobandhigficilada() {
  console.log('Ficlida dhacaaya');
  console.log('Ku darid (add)');
  console.log('Cusboneysiin (update)');
  console.log('Tirtird (delete)');
  console.log('Soo Bandhig Waxa ku jira Jsonkaaga (display)');
  console.log('______________________________________________');
}
// this is calling fucntion
Soobandhigficilada();
// this function is used to prompt the user to enter the action he want
function KacodsoUerka() {
 
  rl.question('Soo Geli Ficilka: ', (choice) => {
    switch (choice) {
        // this is to add something to our to dolist
      case 'add':
        rl.question('Soo geli Wax to dolist laga Daraayo: ', (Task) => {
            // this checking is our dolist something or is empty
                if (Task.trim() === '') {
                  console.log('wax kuma jiraan todo listigaaa!');
                  
                }    else{
                    todoList.addTodo(Task);

                }
         
          
          rl.close();
          
      });
    //   this to update what is in our to dolist
        break;
      case 'update':
        todoList.showTodos();
        rl.question('Soo Geli Shaqada IDgeeda si aad u cusbooneysiiso: ', (id) => {
          rl.question('Soo Geli Waxa la Cusbeysiinaayo: ', (Task) => {
            todoList.updateTodo(parseInt(id), Task);
            rl.close();
          });
        });
        break;
        // is to delete what in our dolist items
      case 'delete':
        rl.question('Soo Geli Shaqada IDgeeda si aad u tirtirto: ', (id) => {
          todoList.deleteTodo(parseInt(id)); 
          rl.close();
        });
        break;
      case 'display':
        todoList.showTodos();
        rl.close();
        break;
    //    this is the last of our switch 
      default:
        console.log('Ficilkaan Majiro! Faldan Markale Iskuday.');
        rl.close();
        break;
         
    }
  });
}
KacodsoUerka();