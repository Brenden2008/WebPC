gun = Gun();
user = gun.user();

if (user.is) {
  user
    .get('bootscripts')
    .map()
    .once(function(script, id) {
      $.getScript(script);
    });
} else {
  terminal.output('You are not logged in');
}
