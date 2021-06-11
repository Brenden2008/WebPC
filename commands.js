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
  }
};
