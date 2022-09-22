import { BadRequestException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export default (errors: ValidationError[]): any => {
  const validationResult = getConstraints(errors);
  throw new BadRequestException({
    errorType: 'ClassValidation',
    validationResult,
    statusCode: HttpStatus.BAD_REQUEST,
  });
};

function getConstraints(errors: ValidationError[]) {
  const constraintsList: Array<any> = [];
  errors.forEach((err) => {
    extractConstraints(err, err.property, constraintsList);
  });
  return constraintsList;
}

function extractConstraints(
  error: ValidationError,
  ancestor: string,
  constraintsList: Array<any>,
) {
  if (!error.children.length) {
    const constraints = error.constraints as any;
    constraintsList.push({
      property: ancestor,
      validations: Object.keys(constraints).map((key) => constraints[key]),
    });
  } else {
    error.children.forEach((err) => {
      extractConstraints(err, `${ancestor}.${err.property}`, constraintsList);
    });
  }
}
