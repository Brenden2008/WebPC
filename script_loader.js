gun = Gun();
user = gun.user();

if (user.is) {
    terminal.output('You are logged in');
 } else {
    terminal.output('You are not logged in');
 }