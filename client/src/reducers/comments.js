export default function comments (state = [], action) {
  switch(action.type) {
    case 'FETCH_COMMENTS':
      return action.comments;
    case 'SUBMIT_COMMENT':
      return state.concat(action.comment)
    default:
      return state;
  }
}
