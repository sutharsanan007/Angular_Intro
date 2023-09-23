import { Injectable } from '@angular/core';

export class PostService {

    // We can make this class injectable by adding the @Injectable decorator
    // @Injectable({
    //     providedIn: 'root'
    // })

    postList: Array<any> = [
        { id: 1, postTitle: "Post 1"},
        { id: 2, postTitle: "Post 2"},
        { id: 3, postTitle: "Post 3"},
        { id: 4, postTitle: "Post 4"},
        { id: 5, postTitle: "Post 5"},
        { id: 6, postTitle: "Post 6"},
    ]

    addPost(newPost: any){
        this.postList.push(newPost)
    }
}