// export default function comments (state = [], action) {
//   switch(action.type) {
//     case 'FETCH_COMMENTS':
//       return action.comments;
//     case 'SUBMIT_COMMENT':
//       return state.concat(action.comment)
//     default:
//       return state;
//   }
// }

function bookComments (state =[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.user
        comment: action.comment
    }]
    default:
      return state
  }
}

function comments (state = [], action) {
  if (typeof action.id !== 'undefined') {
    return {
      ...state,
      [action.id]: bookComments(state[action.id], action)
    }
  }
  return state
}

export default comments
