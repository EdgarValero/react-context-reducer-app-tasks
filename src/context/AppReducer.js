export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        tasks: [...state.tasks.filter((task) => task.id !== action.payload.id)],
      };
    case 'UPDATE_TASK':
      return {
        tasks: [
          ...state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        ],
      };
    default:
      break;
  }
};
