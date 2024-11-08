class UndoRedo {
    constructor() {
      this.undoStack = [];
      this.redoStack = [];
    }
  
    // Add a new action and clear the redo stack
    addAction(action) {
      this.undoStack.push(action);
      this.redoStack = []; // Clear redo stack whenever a new action is performed
    }
  
    // Undo the last action
    undo() {
      if (this.undoStack.length === 0) {
        console.log("Nothing to undo");
        return null;
      }
  
      const action = this.undoStack.pop();
      this.redoStack.push(action);
      return action;
    }
  
    // Redo the last undone action
    redo() {
      if (this.redoStack.length === 0) {
        console.log("Nothing to redo");
        return null;
      }
  
      const action = this.redoStack.pop();
      this.undoStack.push(action);
      return action;
    }
  
    // Optional: Print stacks for debugging
    printStacks() {
      console.log("Undo Stack:", this.undoStack);
      console.log("Redo Stack:", this.redoStack);
    }
  }
  
  // Example usage
  const undoRedoManager = new UndoRedo();
  
  // Add some actions
  undoRedoManager.addAction("Action 1");
  undoRedoManager.addAction("Action 2");
  undoRedoManager.addAction("Action 3");
  
  console.log("After adding actions:");
  undoRedoManager.printStacks(); // Undo Stack: [Action 1, Action 2, Action 3], Redo Stack: []
  
  // Undo actions
  let action = undoRedoManager.undo();
  console.log("Undid:", action);
  
  action = undoRedoManager.undo();
  console.log("Undid:", action);
  
  console.log("After undoing actions:");
  undoRedoManager.printStacks(); // Undo Stack: [Action 1], Redo Stack: [Action 3, Action 2]
  
  // Redo actions
  action = undoRedoManager.redo();
  console.log("Redid:", action);
  
  action = undoRedoManager.redo();
  console.log("Redid:", action);
  
  console.log("After redoing actions:");
  undoRedoManager.printStacks(); // Undo Stack: [Action 1, Action 2, Action 3], Redo Stack: []
  