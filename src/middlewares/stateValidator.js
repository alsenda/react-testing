import tv4 from 'tv4';
import schema from 'middlewares/stateSchema';

const stateValidator = ({ dispatch, getState }) => next => action => {
  next(action);

  const isValid = tv4.validate(getState(), schema);
  console.log(isValid);
};

export default stateValidator;