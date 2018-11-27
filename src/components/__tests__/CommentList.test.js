import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const initalState = {
  comments: ['Comment 1', 'Test comment'],
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initalState}>
      <CommentList />
    </Root>
  );
});

it('creates one list element per comment', () => {
  expect(wrapped.find('.comment--list li').length).toEqual(initalState.comments.length);
});

it('shows the text for each comment', () => {
  const innerText = wrapped.render().text();
  expect(innerText).toContain(initalState.comments[0]);
  expect(innerText).toContain(initalState.comments[1]);
});