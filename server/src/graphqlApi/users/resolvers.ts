import { IUserInput, IUser, IToken } from './src/models/user';
import { UserServices } from './services';

const userResolvers = {
  Query: {
    getUserById: async (
      parent: any,
      { id }: { id: string }
    ): Promise<IUser | null> => {
      const service = new UserServices();
      return await service.getUserById(id);
    },
  },
  Mutation: {
    createUser: async (
      parent: any,
      { input }: { input: IUserInput }
    ): Promise<IUser> => {
      const service = new UserServices();
      return await service.createUser(input);
    },
    userLogin: async (
      parent: any,
      { email, password }: { email: string; password: string }
    ): Promise<IToken> => {
      const service = new UserServices();
      return await service.userLogin(email, password);
    },
  },
};

export default userResolvers;
