   var groupName = '70b592acdb927340e2b041efaa96192c';
// Auto Assign Script

var members = [];
var gm = new GlideRecord('sys_user_grmember');

gm.addQuery('user.active', true);

gm.query();

while(gm.next()) {
  gs.info(gm.user);
}
