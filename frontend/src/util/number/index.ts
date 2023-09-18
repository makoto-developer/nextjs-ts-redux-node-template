export const isNumeric = (n: unknown): boolean => {
  const [numeric, notNumeric] = [true, false]

  // string型 or nubmer型以外は有効な数値ではないと判断
  const isTypeOfNumberOrString = ['string', 'number'].some(validType => validType === typeof n)
  if (!isTypeOfNumberOrString) return notNumeric

  // '' => 空文字は数値ではないと判断
  if (typeof n === 'string' && n === '') return notNumeric

  const convertToNumber = Number(n)
  if (isNaN(convertToNumber)) return notNumeric
  return numeric
}

/**
 * 正の数であるかどうかを判定する
 * - 有効な数値でない場合はnullを返却 // TODO ここはerrorをthrowすべきか?
 * - 負の数はfalseを返す
 */
export const positiveNumber = (n: unknown): boolean | null => {
  const [positive, negative] = [true, false]
  if (!isNumeric(n)) return null
  if (Number(n) < 0) return negative
  return positive
}
