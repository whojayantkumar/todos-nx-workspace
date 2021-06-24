import { Component } from '@angular/core';
interface Todo {
  title: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo2' }];

  addTodo() {
    this.todos.push({title: `New Todo ${Math.floor(Math.random()*1000)}`})
  }
}
