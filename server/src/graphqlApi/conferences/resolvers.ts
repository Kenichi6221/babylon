import {
  IConference,
  IConferenceInput,
  IAsistantInput,
  IMutationResult,
} from '../../models/conference';
import { ConferenceServices } from './services';
import { IContext } from '../graphqlTypes';
import { SPEAKER, ATTENDANT } from '../authorizations/constants';
import { hasRole } from '../authorizations/authorizator';
const conferenceResolvers = {
  Query: {
    getConferenceById: async (
      _,
      { id }: { id: string }
    ): Promise<IConference | null> => {
      const service = new ConferenceServices();
      return await service.getConferenceById(id);
    },
    getAllActiveConferences: async (): Promise<IConference[]> => {
      const service = new ConferenceServices();
      return await service.getAllActiveConferences();
    },
    getAllConferencesBySpeakerId: async (
      _,
      { speakerId }: { speakerId: string }
    ): Promise<IConference[]> => {
      const service = new ConferenceServices();
      return await service.getAllConferencesBySpeakerId(speakerId);
    },
    getAllConferencesByAttendantId: async (
      _,
      { attendantId }: { attendantId: string }
    ): Promise<IConference[]> => {
      const service = new ConferenceServices();
      return await service.getAllConferencesByAttendantId(attendantId);
    },
  },
  Mutation: {
    createConference: async (
      _,
      { input }: { input: IConferenceInput },
      context: IContext
    ): Promise<IConference> => {
      hasRole(context, [SPEAKER]);
      const service = new ConferenceServices();
      return await service.createConference(input);
    },
    updateConference: async (
      _,
      { id, input }: { id: string; input: IConferenceInput },
      context: IContext
    ): Promise<IMutationResult> => {
      hasRole(context, [SPEAKER]);
      const service = new ConferenceServices();
      return await service.updateConference(id, input);
    },
    registerAttendant: async (
      _,
      { input }: { input: IAsistantInput },
      context: IContext
    ): Promise<IMutationResult> => {
      hasRole(context, [ATTENDANT]);
      const service = new ConferenceServices();
      return await service.registerAttendant(input);
    },
  },
};

export default conferenceResolvers;
