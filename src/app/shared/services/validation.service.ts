import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      email: 'Enter a valid email address',
      passwordStrength: 'Password must contain at least 8 characters, including upper/lowercase and numbers',
      passwordMatch: 'Passwords do not match',
      required: 'This field is required',
      oneRequired: 'At least one field is required',
      minlength: `Min length is ${validatorValue.requiredLength} characters`,
      startsWith: `This field must start with ${validatorValue}`,
      digits: 'This field must be a digit'
    };

    return messages[validator];
  }
}
