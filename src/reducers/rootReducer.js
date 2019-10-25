const initState = {
  posts: [
    {id: '1', title: 'This is a post', body: 'This is a post body.'},
    {id: '2', title: 'This is another post', body: 'This is another post body.'},
    {id: '3', title: 'This is the other post body', body: 'This is the other post body.'}
  ]
}



const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer