import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { apiKey } from '../../../../environments/api-key.environment'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  baseURL = 'https://social-network.samuraijs.com/api/1.1/'
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.http.get<Todo[]>(`${this.baseURL}todo-lists`, this.httpOptions).subscribe(res => {
      this.todos = res
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http
      .post<BaseResponse<{ item: Todo }>>(`${this.baseURL}todo-lists`, { title }, this.httpOptions)
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodo() {
    const todoId = '254352c7-dc8f-410a-ab81-2f4c550ddea9'
    this.http
      .delete<BaseResponse>(`${this.baseURL}todo-lists/${todoId}`, this.httpOptions)
      .subscribe(res => {
        this.todos = this.todos.filter(todolist => todolist.id !== todoId)
      })
  }
}
