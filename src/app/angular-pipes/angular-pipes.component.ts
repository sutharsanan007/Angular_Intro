import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent {
  title: string = 'Angular Pipes';
  count: number = 285645;
  dcValue: number = 3.85674;

  price: number = 99.99;

  percent: number = 0.567;

  today: Date = new Date();

  postObj: object = {
    id: 1,
    postTitle: "Post 1",
  }

  postArray: Array<string> = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
  ];

  userdetails = {
    name: "John",
    city: "New York",
    countryCode: "US",
  }

  summary = "Do today's duty, fight today's temptation"

}
