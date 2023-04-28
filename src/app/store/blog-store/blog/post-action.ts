import { createAction, props } from '@ngrx/store';
import { PostComponent } from 'src/app/components/blog/post/post.component';


export const likePost = createAction('[Blog Page] Like', props<{id: number}>());
export const disLikePost = createAction('[Blog Page] dislike', props<{id: number}>());