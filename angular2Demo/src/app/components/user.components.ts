import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.components.html',
  providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];

  constructor(private PostsService: PostsService){
    this.name = 'Mirko'; 
    this.email = 'misha.sekulic@gmail.com';
    this.address = {
        street: 'aerodromska 31',
        city: 'Podgorica'
      }
    this.hobbies = ['gitara', 'matematika', 'dzu dzica'];
    this.showHobbies = false;

    this.PostsService.getPosts().subscribe(posts =>{
      this.posts = posts;
    });
  }
  toggleHobbies(){
    if(this.showHobbies)
      this.showHobbies = false;
    else
      this.showHobbies = true;
  }
  addHobby(hobby:any){
    this.hobbies.push(hobby);
  }
  deleteHobby(j:any){
    this.hobbies.splice(j,1);
  }
}

interface address{
    street: string;
    city: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}

