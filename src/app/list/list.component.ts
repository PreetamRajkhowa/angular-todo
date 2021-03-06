import {
  TodoserviceService
} from './../core/services/todoservice.service';
import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todoList: any;
  isLoading: boolean;

  constructor(private Todoservice: TodoserviceService) {
    this.getToDoList();
  }

  ngOnInit(): void {
    this.isLoading = true;
  }

  getToDoList() {
    this.Todoservice.getToDolist().subscribe(
      (data) => {
        this.isLoading = false;
        this.todoList = data;
      }
    );

  }


}
