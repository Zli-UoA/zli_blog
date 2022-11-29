export const extractMetaData = <T extends Record<string, string[]>>(
  text: string
): Partial<T> => {
  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m)

  const rawMetaData = metaRegExp.exec(text)

  if (!rawMetaData) {
    return {}
  }

  return rawMetaData[1]
    .split('\n')
    .map((keyValue) => {
      const [key, value] = keyValue.split(':')

      return {
        [key]: value.trim().split(' '),
      }
    })
    .reduce((a, b) => ({ ...a, ...b })) as Partial<T>
}

export const removeMetaData = (text: string): string => {
  const metaRegExp = RegExp(/^---[\r\n](((?!---).|[\r\n])*)[\r\n]---$/m)
  return text.replace(metaRegExp, '')
}
