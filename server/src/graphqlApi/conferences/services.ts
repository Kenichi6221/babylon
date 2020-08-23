import ConferenceModel, {
  IConferenceInput,
  IConference,
} from "../../models/conference";

export class ConferenceServices {
  public async createConference(input: IConferenceInput): Promise<IConference> {
    const conference = new ConferenceModel(input);
    await conference.save();
    return conference;
  }
  public async updateConference(
    id: string,
    input: IConferenceInput
  ): Promise<IConference | null> {
    const filter = { _id: id };
    // TODO: validate state vs asistants
    const conferenceUpdated = await ConferenceModel.findOneAndUpdate(
      filter,
      input,
      { new: true }
    ).exec();
    return conferenceUpdated;
  }
  public async getAllConferencesBySpeakerId(
    speakerId: string
  ): Promise<IConference[]> {
    const result = await ConferenceModel.find({ spieakerId: speakerId }).exec();
    return result;
  }
  public async getAllActiveConferences(): Promise<IConference[]> {
    const result = await ConferenceModel.find({ state: "ACTIVE" }).exec();
    return result;
  }
  public async getAllConferencesByAttendantId(
    attendantId: string
  ): Promise<IConference[]> {
    // TODO: Find conferences by attendantId
    const result = await ConferenceModel.find({
      assistants: [attendantId],
    }).exec();
    return result;
  }
  public async getConferenceById(id: string): Promise<IConference | null> {
    const result = await ConferenceModel.findOne({ _id: id }).exec();
    return result;
  }
}
