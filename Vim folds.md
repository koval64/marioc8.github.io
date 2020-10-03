

=== Add fold ===

# mark some lines with SHIFT+V
# then type
zf

=== Folds in vim ===

:mkview		-- save folds
:loadview	-- restore folds

=== Keybindings ===

* zf 	-- create fold ( first mark few lines with SHIFT+V )
* zc 	-- close fold
* zo 	-- open fold
* zd 	-- delete fold

* zr 	-- unfold all
* zR 	-- unfold all
* zm 	-- fold all
* zM 	-- fold all

* za 	-- toggle fold

=== Add to .vimrc to autosave and autoload folds ===

autocmd BufWinLeave *.* mkview
autocmd BufWinEnter *.* silent loadview

# set toggle folds to SHIFT+TAB key

nnoremap <s-tab> za




