import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';
import { PostService } from '../services/post.service'
import { Post } from '../models/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  title: string = "Angular Project"

  postParentMessage: string = "Message coming from parent post component"

  childMessage: string = "Message coming from child post component";

  outputChildMessage: string = 'Mesasge from Child Component via Output decorator'

  @Input() fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }

  posts: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService()
    this.posts = postService.postList;
  }

  addNewData(){

    let newPost: Post = {
      id: 7,
      postTitle: "Post 7",
    }

    this.postService.addPost(newPost)
  }

  ngOnInit(): void {
    
  }

}
