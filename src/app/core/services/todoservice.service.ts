import { Todo } from './../models/Todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  apiUrl: string='https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getToDolist(): Observable<Todo>{
    return this.http.get<Todo>(this.apiUrl+'/posts');
  }

  submitToDoList(postdata: Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl+'/posts',postdata);

  }
}
