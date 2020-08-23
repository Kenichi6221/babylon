import ConferenceModel, {
  IConferenceInput,
  IConference,
  IAsistantInput,
  IMutationResult,
} from '../../models/conference';

export class ConferenceServices {
  public async createConference(input: IConferenceInput): Promise<IConference> {
    const conference = new ConferenceModel(input);
    await conference.save();
    return conference;
  }

  public async updateConference(
    id: string,
    input: IConferenceInput
  ): Promise<IMutationResult> {
    const filter = { _id: id };

    const conf = await ConferenceModel.findOne(filter).exec();

    if (!conf) {
      return { ok: false, message: 'this conference was not found :(' };
    }

    const willDisableConference =
      input.state === 'INACTIVE' && conf.state != input.state;

    if (willDisableConference && conf.assistants.length > 0) {
      return {
        ok: false,
        message:
          'this conferenc already has asistance, is not posible to disable it',
      };
    }

    const conference = await ConferenceModel.findOneAndUpdate(filter, input, {
      new: true,
    }).exec();

    return { ok: true, conference };
  }

  public async registerAttendant(
    input: IAsistantInput
  ): Promise<IMutationResult> {
    const conference = await ConferenceModel.findOne({
      _id: input.conferenceId,
      state: 'ACTIVE',
    }).exec();

    if (!conference) {
      return { ok: false, message: 'this conference was canceled :(' };
    }

    //TODO: IS IT POSIBLE DOUBLE REGISTER IN SAME CONFERENCE?

    const limitAsisstance = conference.quota;
    const totalRegisteredAlready = conference.assistants.length;

    if (limitAsisstance <= totalRegisteredAlready) {
      return { ok: false, message: 'quota to this conference is full' };
    }

    conference.assistants.push(input.attendantId);
    await conference.save();
    return { ok: true, conference };
  }

  public async getAllConferencesBySpeakerId(
    speakerId: string
  ): Promise<IConference[]> {
    console.log(speakerId);
    const result = await ConferenceModel.find({ speakerId: speakerId }).exec();
    return result;
  }

  public async getAllActiveConferences(): Promise<IConference[]> {
    // TODO: Would be better if just get he conferences when quote > total asistants?
    const result = await ConferenceModel.find({ state: 'ACTIVE' }).exec();
    return result;
  }

  public async getAllConferencesByAttendantId(
    attendantId: string
  ): Promise<IConference[]> {
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
