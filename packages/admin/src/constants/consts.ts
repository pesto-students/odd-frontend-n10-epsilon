export const ERROR_MSG = {
  // First name field
  FIRST_NAME_REQUIRED: "First name required",
  FIRST_NAME_MIN_LENGTH: (minLength: number) =>
    `First name should have minimum ${minLength} characters`,
  FIRST_NAME_MAX_LENGTH: (maxLength: number) =>
    `First name can't exceed ${maxLength} characters`,
  FIRST_NAME_ONLY_CHARS: "First name can only have alphabets",

  // Middle name field
  MIDDLE_NAME_REQUIRED: "Please fill middle name",
  MIDDLE_NAME_MIN_LENGTH: (minLength: number) =>
    `Middle name should have minimum ${minLength} characters`,
  MIDDLE_NAME_MAX_LENGHT: (maxLength: number) =>
    `Middle name can't exceed ${maxLength} characters`,
  MIDDLE_NAME_ONLY_CHARS: "Middle name can only have alphabets",

  // Last name field
  LAST_NAME_REQUIRED: "Last name required",
  LAST_NAME_MIN_LENGTH: (minLength: number) =>
    `Last name should have minimum ${minLength} characters`,
  LAST_NAME_MAX_LENGHT: (maxLength: number) =>
    `Last name can't exceed ${maxLength} characters`,
  LAST_NAME_ONLY_CHARS: "Last name can only have alphabets",

  // Email field
  EMAIL_REQUIRED: "Email-id required",
  EMAIL_INCORRECT_FORMAT: "Email is not in correct format (abc@xyz.com)",
  EMAIL_MAX_LENGTH: (maxLength: number) =>
    `Email can't exceed ${maxLength} characters`,

  // Address line1
  ADDRESS_LINE1_REQUIRED: "Address(1) required",
  ADDRESS_LINE1_MAX_LENGTH: (maxLength: number) =>
    `Address(1) can't exceed ${maxLength} characters`,
  ADDRESS_LINE1_PATTERN: "Address(1) can only have alphanumeric characters",

  // Address line2
  ADDRESS_LINE2_MAX_LENGTH: (maxLength: number) =>
    `Address(2) can't exceed ${maxLength} characters`,
  ADDRESS_LINE2_PATTERN: "Address(2) can only have alphanumeric characters",

  // country
  COUNTRY_REQUIRED: "Please select country",

  // state
  STATE_REQUIRED: "Please select state",
  STATE_SELECT_COUNTRY_FIRST: "Please select a country first",

  // city
  CITY_REQUIRED: "City required",
  CITY_MAX_LENGTH: (maxLength: number) =>
    `City can't exceed ${maxLength} characters`,
  CITY_PATTERN: "City can only have alphabetic characters",

  // cell number
  CELL_NUMBER_REQUIRED: "Mobile number required",
  CELL_NUMBER_MIN_LENGTH: (minLength: number) =>
    `Mobile number should have minimum ${minLength} numbers`,
  CELL_NUMBER_MAX_LENGTH: (maxLength: number) =>
    `Mobile number can't exceed ${maxLength} numbers`,
  CELL_NUMBER_PATTERN: "Mobile number can only have numbers",

  // Reset Password form
  OLD_PASSWORD: "Old password required",
  OLD_PASSWORD_MAX_LENGTH: (maxLength: number) =>
    `Old password can't exceed ${maxLength} characters`,
  OLD_PASSWORD_MIN_LENGTH: (minLength: number) =>
    `Old password should have minimum ${minLength} characters`,

  NEW_PASSWORD_REQUIRED: "New password required",
  NEW_PASSWORD_MAX_LENGTH: (maxLength: number) =>
    `New password can't exceed ${maxLength} characters`,
  NEW_PASSWORD_MIN_LENGTH: (minLength: number) =>
    `New password should have minimum ${minLength} characters`,
  NEW_PASSWORD_PATTERN:
    "New password can have - Alpha-numeric with special characters and at least one number and one CAPITAL letter",

  PASSWORD_PATTERN:
    "New password can have - ! @ # $ & % + . _ characters only ",

  CONFIRM_PASSWORD_REQUIRED: "Confirm password required",
  CONFIRM_PASSWORD_MATCH: "Confirm password does not matches with password",
  // SIGN IN form
  PASSWORD_REQUIRED: "Password required",

  SESSION_TIMOUT_MESSAGE: "Your session has been timed out",

  SERVER_NOT_RESPONDING: "Server not responding",

  FILL_ALL_DETAILS: "Please fill all the necessary details",
  UNAUTHORIZED_ACCESS: "Unauthorized Access",
};

export const default_const = {
  SESSION_TIMOUT_DURATION: 600
};
export const user_role_type_const = {
  admin: "admin",
  customer: "customer",
  courier_partner: "courier_partner",
  other: "other"
};  