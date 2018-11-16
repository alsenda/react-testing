import { saveComment } from 'store/actions';
import { SAVE_COMMENT } from 'store/actions/types';

describe('save comment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('New comment');
    expect(action.payload).toEqual('New comment');
  });
});