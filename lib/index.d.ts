export declare const regExp: {
  name: RegExp;
  phone: RegExp;
  telephone: RegExp;
  vehicle: RegExp;
  identityCard: RegExp;
  ip: RegExp;
  port: RegExp;
  uuid: RegExp;
}

interface baseRules {
  message: string,
  trigger: string
}

interface requiredRules extends baseRules {
  required: boolean,
}

interface requiredArrayRules extends requiredRules {
  type: 'array';
}

interface patternRules extends baseRules {
  pattern: RegExp;
}

interface validatorRules {
  validator: (rule: any, value: string, callback: (error?: string) => void) => void;
}

export declare const validator: {
  pleaseInput: (name: string) => baseRules;
  pleaseSelect: (name: string) => baseRules;
  pleaseSelectArray: (name: string) => requiredArrayRules;
  checkNumberRange: (min: number, max: number, border?: [boolean, boolean]) => {
    validator: (rule: any, value: number, callback: (error?: string) => void) => void;
  };
  checkStrLengthRange: (min: number, max: number, border?: [boolean, boolean]) => validatorRules
  checkName: () => patternRules;
  checkPhone: () => patternRules;
  checkVehicle: () => patternRules;
}
