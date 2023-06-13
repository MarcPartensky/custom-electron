symlinks:
	ln -sf $$PWD/bin/* ~/.local/bin
	ln -sf $$PWD/applications/* ~/.local/share/applications
	ln -sf $$PWD/icons/scalable/apps/* ~/.local/share/icons/hicolor/scalable/apps
	ln -sf $$PWD/icons/48x48/apps/* ~/.local/share/icons/hicolor/48x48/apps
electron:
	electron .
