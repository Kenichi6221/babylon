import {
  IConference,
  IConferenceInput,
  IAsistantInput,
  IMutationResult,
} from '../../models/conference';
import { ConferenceServices } from './services';
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
      { input }: { input: IConferenceInput }
    ): Promise<IConference> => {
      const service = new ConferenceServices();
      return await service.createConference(input);
    },
    updateConference: async (
      _,
      { id, input }: { id: string; input: IConferenceInput }
    ): Promise<IMutationResult> => {
      const service = new ConferenceServices();
      return await service.updateConference(id, input);
    },
    registerAttendant: async (
      _,
      { input }: { input: IAsistantInput }
    ): Promise<IMutationResult> => {
      const service = new ConferenceServices();
      return await service.registerAttendant(input);
    },
  },
};

export default conferenceResolvers;
