import { useCallback, useEffect, useRef, useState } from 'react';
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit';

export const useEditorKit = () => {
  const [initialNoteText, setInitialNoteText] = useState<string | null>(null);
  const editorKitRef = useRef<any>(null);
  const saveNoteText = useCallback(
    (text: string) => {
      /** This will work in an SN context, but breaks the standalone editor,
       * so we need to catch the error
       */
      try {
        editorKitRef.current?.onEditorValueChanged(text);
      } catch (error) {
        console.log('Error saving note:', error);
      }
    },
    [editorKitRef]
  );
  useEffect(() => {
    const delegate = new EditorKitDelegate({
      /** This loads every time a different note is loaded */
      setEditorRawText: (text: string) => {
        setInitialNoteText(text);
      },
      clearUndoHistory: () => {},
      getElementsBySelector: () => [],
    });

    editorKitRef.current = new EditorKit({
      delegate: delegate,
      mode: 'plaintext',
      supportsFilesafe: true,
    });
  }, []);

  return { initialNoteText, saveNoteText };
};
