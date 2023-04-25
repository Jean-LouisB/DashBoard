import * as fromPostLikeBlog from './blog/post-reducer';

export interface AppState {
    items: any;
    filters: any;
    selectedItems: number;
}

export const reducers = {
    items: () => {},
    filters: () => {},
    likePost: fromPostLikeBlog.likePostReducer,
    dislikePost: fromPostLikeBlog.dislikePostReducer
};
