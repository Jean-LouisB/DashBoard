import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { likePost } from '../featModule/module-blog/blog/post-action';
import { dislikePost } from '../featModule/module-blog/blog/post-action';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {

  post1={
    titre:"Lorem or not Lorem",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minima debitis harum enim modi reprehenderit, maxime cupiditate temporibus nam quod quam similique fugit voluptatum minus blanditiis est sapiente veniam. Maiores eum quisquam laudantium laboriosam. Voluptate veritatis deserunt odio laborum qui. In obcaecati quae rerum ad nisi dignissimos ratione ab pariatur!",
    loveIt:3,
    created_at:"2023-04-25"

  }
  post2={
    titre:"Choux Hibou Cailloux",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minima debitis harum enim modi reprehenderit, maxime cupiditate temporibus nam quod quam similique fugit voluptatum minus blanditiis est sapiente veniam. Maiores eum quisquam laudantium laboriosam. Voluptate veritatis deserunt odio laborum qui. In obcaecati quae rerum ad nisi dignissimos ratione ab pariatur!",
    loveIt:-2,
    created_at:"2023-04-24"

  }

  post3={
    titre:"Allez les bleus",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minima debitis harum enim modi reprehenderit, maxime cupiditate temporibus nam quod quam similique fugit voluptatum minus blanditiis est sapiente veniam. Maiores eum quisquam laudantium laboriosam. Voluptate veritatis deserunt odio laborum qui. In obcaecati quae rerum ad nisi dignissimos ratione ab pariatur!",
    loveIt:4,
    created_at:"2023-04-23"

  }

  post4={
    titre:"Aléa jacta est",
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minima debitis harum enim modi reprehenderit, maxime cupiditate temporibus nam quod quam similique fugit voluptatum minus blanditiis est sapiente veniam. Maiores eum quisquam laudantium laboriosam. Voluptate veritatis deserunt odio laborum qui. In obcaecati quae rerum ad nisi dignissimos ratione ab pariatur!",
    loveIt:8,
    created_at:"2023-04-28"

  }


  tabPost=[this.post1,this.post2, this.post3, this.post4]
  auteur='Fabrice Kopf'
  constructor(private store: Store){
    
  }
  
  addLoveIt(idPost: number){
    this.tabPost[idPost].loveIt++
    this.store.dispatch(likePost())
    
  }
  addDontLove(idPost: number){
    this.tabPost[idPost].loveIt--
    this.store.dispatch(dislikePost())

  }
  deletePost(idPost: number){
    console.log('il a parlé : '+idPost);

    this.tabPost.splice(idPost,1)

    
    
  }


}
