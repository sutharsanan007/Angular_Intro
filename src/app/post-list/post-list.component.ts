import { Component, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  
  @Input() fromPostParent!:string;

  postList: Array<any>; 
  
  constructor( private postService: PostService) {
    // let postService = new PostService()
    this.postList = postService.postList;
   }
}
