export const getAbout = async (): Promise<string> => {
  const res = await fetch('/about/index.md')
  return res.text()
}
