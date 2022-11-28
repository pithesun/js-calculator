const MAX_DIGIT_NUM = 3;
const ERROR_MESSAGES = {
  PARAM_MISSING: "param is missing",
  WRONG_NUMINPUT: "input are over 3 digits",
  WRONG_INSTANCE(instance, Class) {
    return `${instance}는 ${Class}의 객체가 아닙니다.`;
  },
};

export { ERROR_MESSAGES, MAX_DIGIT_NUM };
