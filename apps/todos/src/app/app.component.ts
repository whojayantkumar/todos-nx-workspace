import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from "@myorg/data";
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  constructor(private http: HttpClient) {
    this.fetchTodos()
  }
  fetchTodos() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }
  addTodo() {
    // this.todos.push({ title: `New Todo ${Math.floor(Math.random() * 1000)}` });
    this.http
      .post('/api/addTodo', {})
      .subscribe(() => {this.fetchTodos()});
  }
}
