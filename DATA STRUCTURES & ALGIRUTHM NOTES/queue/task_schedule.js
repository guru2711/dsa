class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue: Add an item to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Remove an item from the queue
    dequeue() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // View the first item in the queue
    front() {
        if(this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    // View all items in the queue
    printQueue() {
        let str = "";
        for(let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Task class to represent a task
class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    execute() {
        console.log(`Executing Task ID: ${this.id}, Description: ${this.description}`);
    }
}

// TaskScheduler class to manage task scheduling
class TaskScheduler {
    constructor() {
        this.taskQueue = new Queue();
    }

    addTask(task) {
        this.taskQueue.enqueue(task);
        console.log(`Task ID: ${task.id} added to the queue`);
    }

    processTasks() {
        while(!this.taskQueue.isEmpty()) {
            let task = this.taskQueue.dequeue();
            task.execute();
        }
        console.log("All tasks have been processed");
    }
}

// Example usage
let scheduler = new TaskScheduler();
scheduler.addTask(new Task(1, "Clean the house"));
scheduler.addTask(new Task(2, "Buy groceries"));
scheduler.addTask(new Task(3, "Pay bills"));

console.log("Processing tasks...");
scheduler.processTasks();
