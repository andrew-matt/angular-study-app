import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from '../../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos()
  }

  _getTodos() {
    this.todosService.getTodos().subscribe(
      res => {
        this.todos = res
      },
      (error: HttpErrorResponse) => {
        this.error = error.message
      }
    )
  }

  getTodos() {
    this.todosService.getTodos().subscribe({
      next: (res: Todo[]) => {
        this.todos = res
      },
      error: (error: HttpErrorResponse) => {
        this.error = error.message
      },
    })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber

    this.todosService.createTodo(title).subscribe(res => {
      const newTodo = res.data.item
      this.todos.unshift(newTodo)
    })
  }

  deleteTodo() {
    const todoId = 'eab2e295-e012-46c0-b4e8-421dd21d877c'
    this.todosService.deleteTodo(todoId).subscribe(() => {
      this.todos = this.todos.filter(todolist => todolist.id !== todoId)
    })
  }
}
