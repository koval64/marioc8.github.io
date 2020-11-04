

```markdown
:! wc %		-- count words in current file ( show output )
:read ! wc %	-- insert output of external command into vim
:2read ! wc %	-- same as above but do it after the second line
:w ! sudo tee %	-- reopen current file with root permissions
:shell		-- access shell from within vim
```

