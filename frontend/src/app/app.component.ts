import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo1';

  filter: 'all' | 'active' | 'done' = 'all';
  
  allItems = [
    {name: "myfirstTask", description: 'eat', done: true, priority: 1, completionDate: "22-03-2012" }
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(name, description, priority, completionDate) {
    if (priority > 5 || priority < 1) {
      alert("Priority must be between 1 and 5");
      return;
    }
    this.allItems.unshift({
      name,
      description,
      done: false,
      priority,
      completionDate: null
    });
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  onSubmit(){}


}
