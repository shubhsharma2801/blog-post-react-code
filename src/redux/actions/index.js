export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const SEARCH = 'SEARCH';

export const requestPosts = () => ({
    type: REQUEST_POSTS,
});
export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json,
});

export const receivedComments = (json,postId) => ({
    type: RECEIVE_COMMENTS,
    json: json,
    postId: postId
});

export const search= (query) =>({
    type: SEARCH,
    query: query
})
export function fetchPosts() {
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedPosts(json));
            },
            );
    };
}

export const fetchComments = postId => dispatch => {
    //dispatch(requestPosts());
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json(),
            error => console.log(`An error occured `, error))
        .then((json) => {
            dispatch(receivedComments(json,postId));
        })

}