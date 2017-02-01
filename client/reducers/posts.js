const posts = (state=[], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('INCREMENTING LIKES');
      const i = action.index;
      return [
        ...state.slice(0,1),
        {...state[i], likes: state[i].likes + i},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
  return state;
}

export default posts;