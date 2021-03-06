/**
 * @desc 生成guid
 * 
 * @return {String} guid
 */
function guid (): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string): string {
    const r: number = Math.random() * 16 | 0
    let v: number = c === 'x' ? r : (r & 0x3 |0x8)
    return v.toString(16)
  })
}

export default guid
