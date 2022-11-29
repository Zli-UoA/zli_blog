import ReactMarkdown from 'react-markdown'

export const MarkdownViewer: React.FC<{
  mdText: string
}> = ({ mdText }) => {
  return <ReactMarkdown>{mdText}</ReactMarkdown>
}
