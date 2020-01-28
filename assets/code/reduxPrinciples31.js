function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { text: action.text, completed: false },
      ];
    case 'COMPLETE_TODO':
      return state.map((todo, index) =>
        index === action.index
          ? { ...todo, completed: true }
          : todo
      );
    default:
      return state;
  }
}