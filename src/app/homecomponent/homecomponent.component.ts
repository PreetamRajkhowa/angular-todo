import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { Todo } from './../core/models/Todo.model';


@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  todolist: Todo;
  todoId:number=Math.random();
  todoName:string;
  status:number;

  constructor() {
    this.todolist=new Todo(this.todoId,this.todoName,this.status);
  }

  ngOnInit(): void {

  }

  onTodoFormSubmit(){
    console.log(this.todolist);
  }

}
