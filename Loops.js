import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoAns = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Do you want to add more toddos . ?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Are you sure you want to add more . ?",
            // If user is pressing enter without providing any leter then the deafault value atomaticly will be decleard
            //   default : "false"
        },
    ]);
    todos.push(todoAns.todo);
    console.log(todos);
    //The Loop is running on the based of this variable condition
    condition = todoAns.addMore;
}
