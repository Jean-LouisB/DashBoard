import { Store } from '@ngrx/store';
import { Component, OnInit, Output } from '@angular/core';
import { LISTPOSTS } from 'src/app/services/postsList.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit{


tabPost: PostComponent[]=[]

  constructor(private store: Store){ }
  ngOnInit(): void {
   let inputListPost = LISTPOSTS
   inputListPost.forEach(
      post => {this.tabPost.push(new PostComponent(this.store).deserialize(post))}
   );
   console.log(this.tabPost);
   
  }
  










}
