import './App.css'
import { Vim } from "react-vim-wasm";
import vimWorkletUrl from "vim-wasm/vim.js?url";
import React from 'react';

export function App() {
  const filename = 'temp.md';
  const dirs = React.useMemo(() => ["/work"], []);
  const filepath = `/work/${filename}`;
  const contents = 'text';
  const files = React.useMemo(
    () => ({
      [filepath]: contents,
    }),
    [contents, filepath],
  );
  const cmdArgs = React.useMemo(() => [filepath], [filepath]);
  return (
    <div>
      <Vim
        cmdArgs={cmdArgs}
        dirs={dirs}
        files={files}
        onError={console.error}
        onWriteClipboard={navigator.clipboard && navigator.clipboard.writeText}
        readClipboard={navigator.clipboard && navigator.clipboard.readText}
        worker={vimWorkletUrl}
      />
    </div>
  );
}

export default App
