import { ValidationError, ValidationErrorItem } from 'joi';
import { ErrorCodes } from '../enum/errorCodes.enum';

class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public details?: ValidationErrorItem[]
  ) {
    super(message);
  }

  static badRequest(message: string) {
    return new ApiError(ErrorCodes.NOT_FOUND, message);
  }

  static internal(message: string) {
    return new ApiError(ErrorCodes.INTERNAL_ERROR, message);
  }

  static validationError(errors: ValidationError) {
    return new ApiError(ErrorCodes.BAD_REQUEST, 'Validation Error', errors.details);
  }

  static unavthorizedError(message?: string) {
    return new ApiError(ErrorCodes.UNATHORIZED, message ?? 'User is not authorized');
  }
}
export default ApiError;
