const commands = {
  info: instance => {
    instance.output(
      'WebPC running JSOS preRelease-1.0. Terminal powered by Vanilla Terminal.'
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
    user.leave();
    if (user._.sea) {
      instance.output('Logout failed!');
    } else {
      instance.output('Goodbye!');
      instance.setPrompt('Guest ');
    }
  },
  login: (instance, parameters) => {
    user.auth(parameters[0], parameters[1], function() {
      instance.output('Welcome back, ' + user.is['alias']);
      instance.setPrompt(user.is['alias'] + ' ');
    });
  },
  signup: (instance, parameters) => {
    user.create(parameters[0], parameters[1], function() {
      instance.output('Welcome to WebPC, ' + user.is['alias']);
      instance.setPrompt(user.is['alias'] + ' ');
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
    sh.ls(parameters[0], function(err, files) {
      if (err) {
        instance.output('Error: ' + err);
      } else {
        instance.output(files.toString());
      }
    });
  },
  lspwd: (instance, parameters) => {
    sh.ls(sh.pwd(), function(err, files) {
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
  }
};
