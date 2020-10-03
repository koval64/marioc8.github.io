

## Add fold

mark some lines with SHIFT+V
then type
```markdown
zf
```

## Folds in vim

```markdown
:mkview		-- save folds
:loadview	-- restore folds
```

## Keybindings

```markdown
* zf 	-- create fold ( first mark few lines with SHIFT+V )
* zc 	-- close fold
* zo 	-- open fold
* zd 	-- delete fold

* zr 	-- unfold all
* zR 	-- unfold all
* zm 	-- fold all
* zM 	-- fold all

* za 	-- toggle fold
```

## Add to .vimrc to autosave and autoload folds

```markdown
autocmd BufWinLeave *.* mkview
autocmd BufWinEnter *.* silent loadview
```

### set toggle folds to SHIFT+TAB key

```markdown
nnoremap <s-tab> za
```




