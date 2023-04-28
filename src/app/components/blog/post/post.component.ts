import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Deserializable } from 'src/app/models/deserializable.model';
import {likePost, disLikePost} from 'src/app/store/blog-store/blog/post-action'
import { from } from 'rxjs';

@Component({
  selector: 'app-postOne',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements Deserializable {
  @Input() items: any[];

  id: number;
  titre: string;
  content: string;
  loveIt: number;
  created_at: Date;

  constructor(private store: Store) { }
  deserialize(input: any): this {
    return Object.assign(this, input)
  }

  addLoveIt(id: number) {
    this.items[id].loveIt++
    this.store.dispatch(likePost({id}))

  }
  addDontLove(id: number) {
    this.items[id].loveIt--
    this.store.dispatch(disLikePost({id}))


  }
  deletePost() {
    console.log('Le post veut se suicider : ' + this.id);
  }

}
