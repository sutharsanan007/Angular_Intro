import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage:string = "Message coming from parent app component"
  message!: string;
  fromChildOutput!: string

  @ViewChild(PostComponent) childComp: any;

  reciveMessage($event: any){
    this.fromChildOutput = $event;
  }

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    this.message = this.childComp.childMessage
  }
}
