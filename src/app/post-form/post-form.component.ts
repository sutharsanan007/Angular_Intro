import { Component } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
    postTitle!: string;
    postDetails!: string;
    imgURL!: string;
    postURL!: string;
    addBackground!: boolean;
}
