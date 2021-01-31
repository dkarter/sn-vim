import React, { useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/vim';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/edit/continuelist';

import { useEditorKit } from './useEditorKit';

const Editor: React.FC = () => {
  const { initialNoteText, saveNoteText } = useEditorKit();
  const codeMirrorRef = useRef<CodeMirror>(null);

  // set the content of the editor when we get the initial text from the server
  useEffect(() => {
    if (initialNoteText && codeMirrorRef.current) {
      const { current: cm } = codeMirrorRef;
      cm.editor.setValue(initialNoteText);
    }
  }, [initialNoteText]);

  const onChanges = (
    instance: CodeMirror.Editor,
    _change: CodeMirror.EditorChangeLinkedList[]
  ): void => {
    saveNoteText(instance.getValue());
  };

  const indentLine = (dir: 'add' | 'subtract') => {
    if (codeMirrorRef.current) {
      const { current: cm } = codeMirrorRef;
      const line = cm.editor.getCursor().line;
      cm.editor.indentLine(line, dir);
    }
  };

  return (
    <CodeMirror
      ref={codeMirrorRef}
      height="100vh"
      options={{
        theme: 'monokai',
        tabSize: 2,
        indentUnit: 2,
        keyMap: 'vim',
        mode: 'markdown',
        extraKeys: {
          Enter: 'newlineAndIndentContinueMarkdownList',
          Tab: () => indentLine('add'),
          'Shift-Tab': () => indentLine('subtract'),
        },
      }}
      onChanges={onChanges}
    />
  );
};

export default Editor;
