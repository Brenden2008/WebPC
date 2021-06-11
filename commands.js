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
  }
};
