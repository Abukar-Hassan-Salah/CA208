const readline = require('readline');
const TodoList = require('./todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoList = new TodoList();

function Soobandhigficilada() {
  console.log('Ficlida dhacaaya');
  console.log('Ku darid (add)');
  console.log('Cusboneysiin (update)');
  console.log('Tirtird (delete)');
  console.log('Soo Bandhig Waxa ku jira Jsonkaaga (display)');
  console.log('______________________________________________');
}
Soobandhigficilada();
function KacodsoUerka() {
 
  rl.question('Soo Geli Ficilka: ', (choice) => {
    switch (choice) {
      case 'add':
        rl.question('Soo geli Wax to dolist laga Daraayo: ', (Task) => {
                if (Task.trim() === '') {
                  console.log('wax kuma jiraan todo listigaaa!');
                  
                }    else{
                    todoList.addTodo(Task);

                }
         
          
          rl.close();
          
      });
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
       
      default:
        console.log('Ficilkaan Majiro! Faldan Markale Iskuday.');
        rl.close();
        break;
         
    }
  });
}
KacodsoUerka();