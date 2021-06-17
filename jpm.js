// JPM
// JSOS Package Manager
// Version 1.0

const jpm = {
  install: function(pname) {
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('install')
      .once(function(url) {
        $.getScript(url);
        terminal.output('JPM: Installed ' + pname + ' on JSOS.');
      });
    user
      .get('jpm')
      .get('installed')
      .get(pname)
      .put(true);
  },
  uninstall: function(pname) {
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('uninstall')
      .once(function(url) {
        $.getScript(url);
        terminal.output('JPM: Uninstalled ' + pname + ' from JSOS.');
      });
    user
      .get('jpm')
      .get('installed')
      .get(pname)
      .put(false);
  }
};

const jpm_commands = {
  jpm: (instance, parameters) => {
    switch (parameters[0]) {
      case 'install':
        text = 'Today is Saturday';
        break;
      case 'uninstall':
        text = 'Today is Sunday';
        break;
      case 'upload':
        text = 'Today is Sunday';
        break;
      case 'list':
        text = 'Today is Sunday';
        break;
      case 'info':
        text = 'Today is Sunday';
        break;
      default:
        instance.output(
          'JSOS Package Manager Version 1.0 for JSOS. Default storage powered by <a href="https://gofile.io">GoFile.io</a>. Developed by <a href="https://github.com/Brenden2008">Brenden2008</a>. Command list: jpm install (package name), jpm uninstall (package name), jpm list [Lists installed packages], jpm upload (package name) (package description) (package author) (main js script url (MUST BE DIRECT LINK!)) or (local file path), jpm info (package name)'
        );
    }
  }
};
Object.assign(commands, jpm_commands);
