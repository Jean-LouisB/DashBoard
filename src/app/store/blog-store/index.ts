import * as fromPostLikeBlog from './blog/post-reducer';

export interface AppState {
    likePost: number;
    disLikePost: number;
}

export const reducers = {
    //items: () => {},
    likePost: fromPostLikeBlog.likePostReducer,
    disLikePost: fromPostLikeBlog.dislikePostReducer
};
