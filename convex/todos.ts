
// Certainly! Here’s an explanation of what each part of your convex/todos.ts file does, with comments added for clarity:

// The file defines server-side functions for managing a todo list using Convex, a backend-as-a-service for modern web apps.
// It imports types and helpers from Convex and the data model.
// The addTodo mutation adds a new todo item to the database.
// The removeTodo mutation deletes a todo item by its ID.
// The setCompleted mutation updates the completion status of a todo item.
// The getTodos query fetches all todo items from the database, sorted by creation time.



// Import ConvexError for error handling and v for value validation
import { ConvexError, v } from "convex/values";
// Import helpers to define server-side mutations and queries
import { mutation, query } from "./_generated/server";

// Query to fetch all todo items from the database, sorted by newest first
export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

// Mutation to add a new todo item with the given text
export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });

    return todoId;
  },
});

// Mutation to toggle the completion status of a todo item by its ID
export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

// Mutation to delete a todo item by its ID
export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateTodo = mutation({
  args: {
    id: v.id("todos"),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      text: args.text,
    });
  },
});

export const clearAllTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();

    // Delete all todos
    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }

    return { deletedCount: todos.length };
  },
});