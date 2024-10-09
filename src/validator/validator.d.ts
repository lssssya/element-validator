export interface BaseRules {
  message: string,
  trigger: string
}

export interface RequiredRules extends BaseRules {
  required: boolean
}

export interface RequiredArrayRules extends RequiredRules {
  type: 'array'
}

export interface PatternRules extends BaseRules {
  pattern: RegExp
}

export interface ValidatorRules {
  validator: (rule: any, value: string | number | any[], callback: (error?: Error) => void) => void
}

export interface ValidatorArrayRules {
  validator: (rule: any, value: any[], callback: (error?: Error) => void) => void
}
