export const ERROR_HANDLER = 'ERROR_LOG';

const errorHandler = () => (next) => (action) => {
  next(action);
  if (action.type !== ERROR_HANDLER) return;

  // const actionWith = data => ({ ...data })

  next(() => {
    console.log('from error middleware, this is the message.');
  });
};

export default errorHandler;
