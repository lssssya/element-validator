/* 根据结果处理 */
export function output (
  result: boolean,
  errorText: string,
  callback: (error?: Error) => void
) {
  return result ? callback() : callback(new Error(errorText))
}

/* 计算边界 */
export function computeLimit (
  min: number,
  max: number,
  value: number,
  border: [boolean, boolean]
): boolean {
  const [borderL, borderR] = border
  const judgeL = borderL ? value >= min : value > min
  const judgeR = borderR ? value <= max : value < max
  return judgeL && judgeR
}

export default {
  output,
  computeLimit
}
