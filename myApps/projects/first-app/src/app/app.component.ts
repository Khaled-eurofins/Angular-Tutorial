import { Component, OnInit } from '@angular/core';

interface Book {
  title: string;
  author: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FirstApp';
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
  canEdit = false;

  name: string = '';
  job: string = '';
  showBook: boolean = true;

  books: Book[] = [
    {
      title: 'Clean Code',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates,
      iusto incidunt nulla eos cum voluptatem atque quam sapiente quidem dolorum
      aspernatur blanditiis, inventore dolor odit quae repellendus, placeat
      possimus.`,
      author: 'Robert C Martin',
      price: 50,
    },
    {
      title: 'Pragmatic Programmer',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates,
      iusto incidunt nulla eos cum voluptatem atque quam sapiente quidem dolorum
      aspernatur blanditiis, inventore dolor odit quae repellendus, placeat
      possimus.`,
      author: 'David Thomas',
      price: 20,
    },
  ];

  ngOnInit(): void {
    console.log('OnInit');
  }

  sayMessage() {
    alert(this.message);
  }

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }

  handleOnChange() {
    console.log('yes');
  }

  handleOnShow() {
    this.showBook = !this.showBook;
  }
}
