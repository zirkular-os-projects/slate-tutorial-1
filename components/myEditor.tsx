import styles from "../styles/Editor.module.css";
import { useState } from "react";

// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

//For TypeScript
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }


const initialValue: CustomElement[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()))
  return <Slate editor={editor} value={initialValue}>
    <Editable />
  </Slate>
}

export default MyEditor;