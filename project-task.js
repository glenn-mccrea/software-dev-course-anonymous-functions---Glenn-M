/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

let todos = [
  { task: "Wash the dishes", completed: false, priority: 3 },
  { task: "Write a blog post", completed: true, priority: 1 },
  { task: "Buy groceries", completed: false, priority: 2 },
  { task: "Study JavaScript", completed: true, priority: 1 },
  { task: "Walk the dog", completed: false, priority: 2 },
];

// ============================================
// 🔍 Tasks
// ============================================
/*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */

const notCompletedTasks = todos.filter((todos) => todos.completed === false);
console.log("Non-Completed Tasks:");

console.log(notCompletedTasks);

//console.log(typeof notCompletedTasks); //object
//console.log(notCompletedTasks[0].completed);

/*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */

const sortedTasks = todos.sort((a, b) => a.priority - b.priority);
console.log("Sorted Tasks:");
console.log(sortedTasks);

/*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
/* const allDone = todos.map(completedTasks);

console.log(allDone);

function completedTasks(array) {
  if (array.completed === false) {
    return (array.completed = true);
  } else {
    return array.completed;
  }
}
 */

// my test to see what it was initially
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].completed);
//}

// the actual anonymous function i came up with
allDone = todos.map((array) => {
  if (array.completed === false) {
    return (array.completed = true);
  } else {
    return array.completed;
  }
});
//log it
console.log(`Convert to True: ${allDone}`);

// My check after to make sure it did what i thought it did
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].completed);
// }

/*
  🔹 Task 4: Combine Filters

  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
console.log("Combined filters: ");

todos = [
  { task: "Wash the dishes", completed: false, priority: 3 },
  { task: "Write a blog post", completed: true, priority: 1 },
  { task: "Buy groceries", completed: false, priority: 2 },
  { task: "Study JavaScript", completed: true, priority: 1 },
  { task: "Walk the dog", completed: false, priority: 2 },
];
const combinedFilters = todos
  .filter((todos) => todos.completed === false)
  .sort((a, b) => a.priority - b.priority);

console.log(combinedFilters);
// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Incomplete Tasks:", ...);
// console.log("Sorted by Priority:", ...);
// console.log("All Tasks Completed:", ...);
// console.log("Sorted Incomplete Tasks:", ...);
