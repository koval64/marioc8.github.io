


### Vim modes

  | Mode              | keys           |
  | :-                | :-             |
  | Normal Mode       | Esc            |
  | Insert Mode       | i, a, c, o, s  |
  | Visual Mode       | v, V, <Ctrl-v> |
  | Command-line Mode | :, /           |


### Vim visual diff files in windows
:window difft


### Vim operators

  |  c   |  change                      |
  |  d   |  delete                      |
  |  y   |  yank into register          |
  |  ~   |  swap case                   |
  |  gu  |  make lowercase              |
  |  gU  |  make uppercase              |
  |  !   |  filter to external program  |
  |  <   |  shift left                  |
  |  >   |  shift right                 |
  |  =   |  indent                      |


### Vim text objects

  |  aw   |  a word            |
  |  iw   |  inner word        |
  |  aW   |  a WORD            |
  |  i    |  inner WORD        |
  |  ap   |  a paragraph       |
  |  ip   |  inner paragraph   |
  |  ab   |  a bracket         |
  |  ib   |  inner bracket     |
  |  at   |  a tag block       |
  |  it   |  inner tag block   |


### Vim motions

  |  %                  |  go to first matching parent / bracket  |
  |  [count]+           |  down to first non-blank char of line   |
  |  [count]$           |  to end of line                         |
  |  [count]f/F{char}   |  to next occurence of {char}            |
  |  [count]t/T{char}   |  to before next occurence of {char}     |
  |  [count]h/j/k/l     |  left, down, up or right                |
  |  [count]]m          |  Go to beginning of next method         |
  |  [count]w/W         |  go a word / WORD to the right          |
  |  [count]b/B         |  go a word / WORD to the left           |
  |  [count]e/E         |  go to end of word / WORD right         |


### Vim putting motions, objects, operators and modes together

  |  6+    |  6x go down to line start                |
  |  gUaW  |  capitalize a WORD                       |
  |  3ce   |  3x change to word end                   |
  |  4$    |  4x go to end of line                    |
  |  d]m   |  delete to start of next method          |
  |  %     |  jump to match of next paren or bracket  |


### File browsing in VIM

  | :Explore  | file explorer        |
  | :Sexplore | horizontal           |
  | :Vexplore | vertical             |
  | :Texplore | open file in tabpage |
  | :edit .   |                      |
  | :e.       |                      |
  | :sp.      | (horizontal)         |
  | :vs.      | (vertical)           |

### File operation commands:

  | % | create new file |
  | d | create new dir  |
  | R | renaming        |
  | D | deleting        |

:bdel - close current buffer  


### VIM TABS

  | vim file1          | open file1 in vim                     |
  | :tabedit file2     | open file2 in tab                     |
  | :tabedit file3     | open file3 in tab                     |
  | gt                 | go next tab                           |
  | gT                 | go previous tab                       |
  | {i}gt              | go {i} times next tab                 |
  | {i}gT              | go {i} times previous tab             |
  | :tabfirst          | go first tab                          |
  | :tablast           | go last tab                           |
  | :tabn              | go next tab                           |
  | :tabp              | go previous tab                       |
  | :tabs              | list all open tabs                    |
  | vim -p file1 file2 | open multiple files in tabs           |
  | :tabclose          | close tab                             |
  | :tabonly           | close all tabs except the current one |

# Session save and restore
:mksession session001.vim  
# To restore session either
vim -S session001.vim  
### or within vim
:source session001.vim  

# Other
:scriptnames  
:set path  
:set wildmenu  


### vim plugins:

| vundle    | plugin manager        |
| nerdtree  | file drawer           |
| fugitive  | git tool              |
| syntastic | syntax checker/linter |
| lightline ||


tmux  


### Pure vim:

fuzzy file search  
tag jumping  
autocomplete  
file browsing  
snippets  
build integration  

