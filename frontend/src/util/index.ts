/**
 * あらゆるオブジェクト有効な値かどうかを判定する
 * @param x JavaScriptで扱える全ての値...文字列, undefined, null, 0, [], infinity, true/false, など
 *
 * example
 * truthy(0) => true
 * truthy([]) => true
 * truthy('') => true
 * truthy(undefined) => false
 * truthy(null) => false
 * truthy(1/0) => true
 * truthy({}) => true
 */
export const truthy = (x: unknown) => (x!== false) && existy(x)
export const existy = (x: unknown) => x != null
