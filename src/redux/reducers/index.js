import { REQUEST_POSTS, RECEIVE_POSTS, RECEIVE_COMMENTS,SEARCH } from '../actions';
let initialState = {};
const reducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return { ...state, loading: true };
        case RECEIVE_POSTS:
            initialState = state;
            return { ...state, posts: action.json, loading: false };
        case RECEIVE_COMMENTS:
            debugger;
            const data = {
                ...state, loading: false, posts: state.posts.map(post => {
                    if (post.id === action.postId) {
                        post.comments = action.json;
                    }
                    return post;
                })
            }
           return data; 
        case SEARCH:
            return {...state, searchTerm:action.query}   
        default:
            return state;
    }
};
export default reducer;