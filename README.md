# SN|Vim

A Vim Markdown Editor component for the E2E encrypted notes app, [StandardNotes](https://standardnotes.org).

## Motivation

### Why another Vim editor?

Although StandardNotes comes with it's own Vim editor, I felt like it was
lacking in a few areas:

1. The syntax highlighting on it was not great
2. Markdown title font is really big compared to other text, no matter the level of heading, and caused the cursor size to be misaligned with the characters.

### Additional features

Given that this is a custom editor, I am able to implement new features that
were previously missing from the official Vim editor:

- Automated bullet lists
- Tab / Shift-Tab for indentation
- Uniform font size

### Planned features

- Status bar (word count/vim mode)
- Ability to change themes (currently monokai is hardcoded)
  - Utilize StyleKit design tokens
- Ability to change font size using keyboard shortcuts

## Installation

1. Open StandardNotes
2. Click the "Extensions" button on the bottom left
3. Click "Import Extension" in the menu that opens
4. Enter `https://dkarter.github.io/sn-vim/ext.json`
5. Review and click `Install`
