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
        terminal.output('JPM: Installing ' + pname + ' on JSOS.');
        $.getScript(url);
        terminal.output('JPM: Installed ' + pname + ' on JSOS.');
      });
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
    terminal.output('JPM: Uploaded ' + pname + ' to JPM.');
  },
  info: function(pname) {
    terminal.output('JPM Info on ' + pname + ': ');
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('desc')
      .once(function(data) {
        terminal.output('Description: ' + data);
      });
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('author')
      .once(function(data) {
        terminal.output('Package Author: ' + data);
      });
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('install')
      .once(function(data) {
        terminal.output('Install URL: ' + data);
      });
    gun
      .get('jpm')
      .get('package')
      .get(pname)
      .get('url')
      .get('uninstall')
      .once(function(data) {
        terminal.output('Uninstall URL: ' + data);
      });
  }
};

const jpm_commands = {
  jpm: (instance, parameters) => {
    switch (parameters[0]) {
      case 'install':
        jpm.install(parameters[1]);
        break;
      case 'uninstall':
        jpm.uninstall(parameters[1]);
        break;
      case 'upload':
        jpm.upload(
          parameters[1],
          parameters[2],
          parameters[3],
          parameters[4],
          parameters[5]
        );
        break;
      case 'info':
        jpm.info(parameters[1]);
        break;
      default:
        instance.output(
          'JSOS Package Manager Version 1.0 for JSOS. Developed by <a href="https://github.com/Brenden2008">Brenden2008</a>. Command list: jpm install (package name), jpm uninstall (package name), jpm list [Lists installed packages], jpm upload (package name) (package description) (package author) (install js script url (MUST BE DIRECT LINK!)) (uninstall js script url (MUST BE DIRECT LINK!)), jpm info (package name)'
        );
    }
  }
};
Object.assign(commands, jpm_commands);
