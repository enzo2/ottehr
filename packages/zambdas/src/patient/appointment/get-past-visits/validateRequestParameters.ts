import { GetAppointmentsRequest } from 'utils';
import { ZambdaInput } from '../../../shared';

export function validateRequestParameters(input: ZambdaInput): GetAppointmentsRequest & Pick<ZambdaInput, 'secrets'> {
  const { patientId } = input.body ? JSON.parse(input.body) : { patientId: undefined };

  return {
    patientId,
    secrets: input.secrets,
  };
}
