import { ADD_REMINDER, ADD_DATETIME, DELETE_REMINDER} from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text
  }
  console.log('action in addReminder', action);
  return action;
};

export const deleteReminder = (id) => {
  const action  = {
    type: DELETE_REMINDER,
    id
  }
  console.log('action in deleteReminder:', action);
  return action;
}
