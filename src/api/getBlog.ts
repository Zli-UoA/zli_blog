export const getBlog = async (blogName: string): Promise<string> => {
  const res = await fetch('/articles/' + blogName + '/index.md');
  return await res.text()
}