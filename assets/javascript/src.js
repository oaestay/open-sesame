function openDoor() {
  var request = new XMLHttpRequest();
  request.open('POST', 'http://192.168.86.77:8123/api/services/switch/turn_on', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  request.send({'entity_id': 'switch.main_door'});
}

function ready(callback){
  if (document.readyState!='loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') callback();
  });
}

ready(openDoor);
