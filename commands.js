const commands = {
    flavour: (instance) => {
        instance.output('There is only one flavour for your favorite🍦and it is <b>vanilla<b>.')
        instance.setPrompt('@soyjavi <small>❤️</small> <u>vanilla</u> ');
    },
    
    ping: (instance, parameters) => {
        instance.output(`Ping to <u>${parameters[0]}</u>...`);
    },
};