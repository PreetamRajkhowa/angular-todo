import { TodoserviceService } from './../core/services/todoservice.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../core/models/Todo.model';



@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  todolist: Todo;
  userid: number;
  title:string;
  body:string;
  successMessage:string;

  constructor(private todoService: TodoserviceService) {
    this.todolist=new Todo(this.userid,this.title,this.body);
  }

  ngOnInit(): void {

  }

  onTodoFormSubmit(){
    this.todoService.submitToDoList(this.todolist).subscribe(
      (data)=>{
        this.successMessage='Data Saved Successfully!!';
        this.resetData();
      }
    );

  };

  resetData(){
    this.todolist=new Todo(this.userid,this.title,this.body);
  };

}
