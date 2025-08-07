import readline from 'readline';
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const todo=[];
const showMenu=()=>{ 
    console.log("\n1: Add a new task");
    console.log("2:  View all tasks");
    console.log("3: Exit");
    rl.question("Please select an option (1-3): ", handleinput)
}

const handleinput=(option)=>{
    if(option==="1"){
        rl.question("\nEnter the task: ", (task)=>{
            todo.push(task);
            console.log(`Task added: ${task}`);
            showMenu();
        });
    }
     else if(option==="2"){
        console.log("\nYour To-Do List:");
        todo.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        })
        showMenu()
    }
    else  if(option==="3"){
      console.log("\nExiting the To-Do App. Goodbye!");
        rl.close();
    }
    else{
        console.log("Invalid option. Please try again.");
       showMenu();
    }
}
showMenu();