

### keybindings & load/save

```markdown
zf 	-- create fold ( first mark few lines with SHIFT+V )
zo 	-- open fold
zc 	-- close fold

za 	-- toggle fold
zd 	-- delete fold

zr 	-- unfold all
zR 	-- unfold all
zm 	-- fold all
zM 	-- fold all

:mkview		-- save folds
:loadview	-- restore folds
```

### add to .vimrc to autosave and autoload folds

```markdown
autocmd BufWinLeave *.* mkview
autocmd BufWinEnter *.* silent loadview
```

### set toggle folds to SHIFT+TAB key

```markdown
nnoremap <s-tab> za
```




