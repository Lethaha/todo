import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
      {
        id: 1,
        description: 'Learn Angular'
      },
      {
        id: 2,
        description: 'Learn spring boot'
      },
      {
        id: 3,
        description: 'Learn java'
      }

    
  ]

  todo = {
    id: 1,
    description: 'Learn Angular'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
