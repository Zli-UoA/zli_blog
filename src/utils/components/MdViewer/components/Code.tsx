import classNames from 'classnames'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { inlineCode } from './Code.css'

export const Code: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
  inline?: boolean
}> = ({ children, className, inline }) => {
  if (inline) {
    return <InlineCode className={className}>{children}</InlineCode>
  }
  return <CodeBlock className={className}>{children}</CodeBlock>
}

export const InlineCode: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  return <code className={classNames(className, inlineCode)}>{children}</code>
}

export const CodeBlock: React.FC<{
  children: React.ReactNode & React.ReactNode[]
  className?: string
}> = ({ children, className }) => {
  const match = /language-(\w+)/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''

  return (
    <SyntaxHighlighter
      style={atomOneDark /* eslint-disable-line */}
      language={lang}
      showLineNumbers
      customStyle={{
        margin: '16px 0px',
        borderRadius: '4px',
        fontSize: '16px',
        wordSpacing: '4px',
        fontFamily: 'monospace',
      }}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
}
