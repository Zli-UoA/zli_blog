import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Anchor } from './components/Anchor'
import { Code } from './components/Code'
import { Del } from './components/Del'
import { Em } from './components/Em'
import { H1, H2, H3, H4, H5, H6 } from './components/Heading'
import { Ul } from './components/List'
import { Paragraph } from './components/Paragraph'
import { Pre } from './components/Pre'
import { Table, Td, Th } from './components/Table'

export const MarkdownViewer: React.FC<{
  mdText: string
}> = ({ mdText }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        p: Paragraph,
        pre: Pre,
        code: Code,
        em: Em,
        del: Del,
        ul: Ul,
        a: Anchor,
        table: Table,
        th: Th,
        td: Td,
      }}
    >
      {mdText}
    </ReactMarkdown>
  )
}
