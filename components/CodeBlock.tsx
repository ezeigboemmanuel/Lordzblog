"use client"
import SyntaxHighlighter from "react-syntax-highlighter";
import atomDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

export const CodeBlock = ({value}: any) => {
    return (
    <div className="bg-[#282c34]">
      <p className="p-3">{value.filename}</p>
      <hr className="border-[#4e5461]" />
      <SyntaxHighlighter language="javascript" style={atomDark}>
          {value.code}
      </SyntaxHighlighter>
    </div>
    )
  }