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
  },
  upload: function(pname, pdesc, pauth, pinstallurl, puninstallurl) {
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('desc')
      .put(pdesc);
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('author')
      .put(pauth);
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('install')
      .put(pinstallurl);
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('uninstall')
      .put(puninstallurl);
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
          'JSOS Package Manager Version 1.0 for JSOS. Developed by <a href="https://github.com/Brenden2008">Brenden2008</a>. Command list: jpm install (package name), jpm uninstall (package name), jpm list [Lists installed packages], jpm upload (package name) (package description) (package author) (install js script url (MUST BE DIRECT LINK!)) (uninstall js script url (MUST BE DIRECT LINK!)), jpm info (package name)'
        );
    }
  }
};
Object.assign(commands, jpm_commands);
