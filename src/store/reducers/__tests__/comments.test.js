import commentsReducer from 'store/reducers/comments';
import { SAVE_COMMENT } from 'store/actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment',
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New comment']);
});

it('handles actions with unknown type', () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});