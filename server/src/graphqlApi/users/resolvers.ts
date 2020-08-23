import { IUserInput, IUser } from './src/models/user';
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
  },
};

export default userResolvers;
