

# Keybindings

```markdown
zf 	-- create fold ( first mark few lines with SHIFT+V )
za 	-- toggle fold
zd 	-- delete fold

zo 	-- open fold
zc 	-- close fold

zr 	-- unfold all
zR 	-- unfold all
zm 	-- fold all
zM 	-- fold all

:mkview		-- save folds
:loadview	-- restore folds
```

# Add fold

mark some lines with SHIFT+V
then type
```markdown
zf
```

# Add to .vimrc to autosave and autoload folds

```markdown
autocmd BufWinLeave *.* mkview
autocmd BufWinEnter *.* silent loadview
```

# set toggle folds to SHIFT+TAB key

```markdown
nnoremap <s-tab> za
```




