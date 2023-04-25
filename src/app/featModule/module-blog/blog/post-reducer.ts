import { createReducer, on } from '@ngrx/store';
import { likePost } from './post-action';
import { dislikePost } from './post-action';
const initialState = 0;
const initialState2 = 0;

export const likePostReducer = createReducer(
    initialState,
    on(likePost, (state) => state + 1)
);
export const dislikePostReducer = createReducer(
    initialState2,
    on(dislikePost, (state) => state + 1)
);

