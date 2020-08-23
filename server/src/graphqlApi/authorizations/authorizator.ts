import { IContext } from '../graphqlTypes';
import { AuthenticationError } from 'apollo-server-express';
export const hasRole = (context: IContext, allowroles: string[]): void => {
  const { user } = context;
  if (!allowroles.includes(user.role)) {
    throw new AuthenticationError('you need authorization for this action.');
  }
};
