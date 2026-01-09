import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule /*RouterOutlet*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
  newTodoTitle = signal('');
  todos: Todo[] = [];

  addTodo(): void {
    if (this.newTodoTitle().trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle().trim(),
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle.set('');
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  } 

  toggleTodo(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  get activeTodos(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get completedTodos(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
}
