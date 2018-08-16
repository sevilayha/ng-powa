import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="hero is-fullheight is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-3">TODODODODODOS</h1>

          <div *ngIf="todos" class="todos-list">
            <div *ngFor="let todo of todos | async" class="todo-item  box">
              {{ todo }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .todos-list {
        padding: 5px;
        background: #e3e4e6;
        max-width: 300px;
        border-radius: 4px;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15);
      }

      .box {
        margin-bottom: 7px;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  apiUrl =
    'https://wt-727f5419f95c299bb954c69029d1ba80-0.sandbox.auth0-extend.com/nghouston';
  todos;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.http.get(this.apiUrl);
  }
}
