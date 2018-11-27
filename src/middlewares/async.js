const async = ({ dispatch }) => next => action => {
  // Check if the action has a promise on its 'payload' property
  // If it doesn't, then send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // If it does, then wait for it to resolve
  action.payload.then(function(response) {
    // Get promise data
    // Create new action
    const newAction = {
      ...action,
      payload: response,
    };
    // dispatch action with data from promise
    dispatch(newAction);
  });
};

export default async;