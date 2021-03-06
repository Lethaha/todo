import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id:  number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {



  todos = [
      new Todo(1, 'Learn Angular', false, new Date()),
      new Todo(2, 'Learn spring boot', true, new Date()),
      new Todo(3, 'Learn Java', false, new Date()),
      new Todo(4, 'Learn Python', false, new Date()),
  ]

  todo = {
    id: 1,
    description: 'Learn Angular'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
