export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARKS_AS_COMPLETE = 'MARKS_AS_COMPLETE';

export const addTodo = (text) =>{
   return {
       type: ADD_TODO,
       payload: text
   }
}