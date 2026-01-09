import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from './todo';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
}
