import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent {
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];

  objArray: Array<any> = [
    { id: 1, postTitle: 'post 1' },
    { id: 2, postTitle: 'post 2' },
    { id: 3, postTitle: 'post 3' },
    { id: 4, postTitle: 'post 4' },
    { id: 5, postTitle: 'post 5' },
  ]

  stepForm!: string;
  isActive: boolean = true;

  name: string = '';
  email: string = '';
  address: string = '';

  users: Array<any> = []

  constructor() { 
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew(){
    this.objArray.push({id: 6, postTitle: 'post 6'});
  }

  onDelete(index: number){
    this.objArray.splice(index, 1);
  }

  onClick(status: string){
    this.stepForm = status;
  }

  onSubmit(){
    this.users.push({
      "name": this.name, 
      "email": this.email, 
      "address": this.address
    });
  }

  onDeleteUser(index: number){
    this.users.splice(index, 1);
  }
}
