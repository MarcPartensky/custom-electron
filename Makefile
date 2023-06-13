symlinks:
	ln -sf $$PWD/bin/* ~/.local/bin
	ln -sf $$PWD/applications/* ~/.local/share/applications
electron:
	electron .
