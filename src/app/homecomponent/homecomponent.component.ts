import {
  TodoserviceService
} from './../core/services/todoservice.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Todo
} from './../core/models/Todo.model';



@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  todolist: Todo;
  userid: number;
  title: string;
  body: string;
  successMessage: string;
  formShow: boolean = true;

  constructor(private todoService: TodoserviceService) {
    this.todolist = new Todo(this.userid, this.title, this.body);
  }

  ngOnInit(): void {

  }

  onTodoFormSubmit(formdata: Todo) {
    this.todoService.submitToDoList(formdata).subscribe(
      (data) => {
        this.successMessage = 'Data Saved Successfully!!';
        this.formShow = false;
      }
    );

  };

  resetData() {
    this.todolist = new Todo(this.userid, this.title, this.body);
  };

  createAnotherTodo() {
    this.resetData();
    this.formShow = true;
  };

}
