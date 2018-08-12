$(document).ready(function(){
  $('#style_editor').submit( (event) =>{
    
    let selector = document.getElementsByName('selector')[0].value;
    let property = document.getElementsByName('property')[0].value;
    let value = document.getElementsByName('value')[0].value;
    
    $(selector).css(property, value);
    event.preventDefault();
  })
});
