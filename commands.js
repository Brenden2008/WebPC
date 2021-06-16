const commands = {
  info: instance => {
    instance.output(
      'WebPC running JSOS preRelease-3.2. Terminal powered by Vanilla Terminal.'
    );
  },

  echo: (instance, parameters) => {
    instance.output(parameters[0]);
  },

  exe: (instance, parameters) => {
    instance.output(eval(parameters[0]));
  },

  debug: (instance, parameters) => {
    console.log(instance);
  },

  logout: (instance, parameters) => {
    gun
      .get('usrstatus')
      .get(user.is['alias'])
      .put('offline');
    user.leave();
    if (user._.sea) {
      instance.output('Logout failed!');
    } else {
      instance.output('Goodbye!');
      terminal.setPrompt(user.is['alias'] + ' ' + sh.pwd());
      location.reload();
    }
  },
  login: (instance, parameters) => {
    user.auth(parameters[0], parameters[1], function() {
      const urlParams = new URLSearchParams(window.location.search);
      const safemode = urlParams.get('safemode');
      instance.output('Welcome back, ' + user.is['alias']);
      instance.setPrompt(user.is['alias'] + ' ');
      gun
        .get('usrstatus')
        .get(user.is['alias'])
        .put('online');
      user
        .get('bootscripts')
        .map()
        .once(function(urls, id) {
          if (urls.active == true && safemode != true) {
            $.getScript(urls.url);
            terminal.output('Loaded: ' + id + ' into JSOS!');
          }
        });
      while (document.getElementById('vanilla-terminal').firstChild) {
        document
          .getElementById('vanilla-terminal')
          .removeChild(document.getElementById('vanilla-terminal').firstChild);
      }
      terminal = undefined;
      var terminal = new VanillaTerminal({
        commands,
        welcome:
          "Welcome to WebPC. JSOS preRelease-2.3 Type 'help' for a list of commands.",
        prompt: user.is['alias'] + ' /'
      });
      terminal.setPrompt(user.is['alias'] + ' ' + sh.pwd());
    });
  },
  signup: (instance, parameters) => {
    user.create(parameters[0], parameters[1], function() {
      instance.output('Welcome to WebPC, ' + user.is['alias']);
      terminal.setPrompt(user.is['alias'] + ' ' + sh.pwd());
      gun
        .get('usrstatus')
        .get(user.is['alias'])
        .put('online');
    });
  },
  mkdir: (instance, parameters) => {
    fs.mkdir(parameters[0], function(err) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output('Created directory: ' + parameters[0]);
      }
    });
  },
  rmdir: (instance, parameters) => {
    fs.rmdir(parameters[0], function(err) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output('Removed directory: ' + parameters[0]);
      }
    });
  },
  ls: (instance, parameters) => {
    fs.readdir(parameters[0], function(err, files) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output(files.toString());
      }
    });
  },
  lspwd: (instance, parameters) => {
    fs.readdir(sh.pwd(), function(err, files) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output(files.toString());
      }
    });
  },
  readfile: (instance, parameters) => {
    fs.readFile(parameters[0], function(err, data) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output(data);
      }
    });
  },
  writefile: (instance, parameters) => {
    fs.writeFile(parameters[0], parameters[1], function(err) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output('Wrote: ' + parameters[1] + ' to: ' + parameters[0]);
      }
    });
  },
  cd: (instance, parameters) => {
    sh.cd(parameters[0], function(err) {
      if (err) throw err;
      // sh.pwd() is now '/dir1'
      instance.output(sh.pwd());
      if (user.is) {
        instance.setPrompt(user.is['alias'] + ' ' + sh.pwd());
      } else {
        instance.setPrompt('Guest ' + sh.pwd());
      }
    });
  },
  rm: (instance, parameters) => {
    sh.rm(parameters[0], function(err) {
      if (err) throw err;
      instance.output(parameters[0]);
    });
  },
  rename: (instance, parameters) => {
    fs.rename(parameters[0], parameters[1], function(err) {
      if (err) throw err;
      instance.output(parameters[0] + ' has been renamed to ' + parameters[1]);
    });
  },
  exef: (instance, parameters) => {
    instance.output(parameters[0]);
    sh.exec(parameters[0], parameters, function(err) {
      if (err) throw err;
    });
  },
  wget: (instance, parameters) => {
    $.get(parameters[0], function(data) {
      instance.output('File downloaded. Writing to disk...');
      fs.writeFile(parameters[1], data, function(err) {
        if (err) {
          instance.output('Error: ' + err);
        } else {
          instance.output('Writing completed.');
        }
      });
    });
  },
  wexe: (instance, parameters) => {
    instance.output(parameters[0]);
    $.getScript(parameters[0]);
  }
};
