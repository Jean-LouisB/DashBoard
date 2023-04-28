import { createReducer, on } from '@ngrx/store';
import { likePost } from './post-action';
import { disLikePost } from './post-action';


export interface LikeItState {
    id: number | null
    stateLike: number

}


const initialState: LikeItState = {
    id: null,
    stateLike: 0
}


export const likePostReducer = createReducer(
    initialState,
    on(likePost,(state, {id})=>({...state,stateLike:state.stateLike+1,id:id}))
    //on(likePost, (state) => ({...state, stateLike:state.stateLike+1}))

);
export const dislikePostReducer = createReducer(
    initialState,
    on(disLikePost, (state, {id})=>({...state,stateLike:state.stateLike-1,id:id}))

);

