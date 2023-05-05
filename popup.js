document.addEventListener('DOMContentLoaded', function() {
  var inputField = document.getElementById('input-field');
  var outputField = document.getElementById('output-field');
  var copyButton = document.getElementById('copy-button');

  function copyInputToOutput() {

    var domain = inputField.value
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/whois?domain=' + domain,
      headers: { 'X-Api-Key': '9y3GDBXI7mJXgKVRzpX9IV0bBmCns2ODzwDNQXAZ' },
      contentType: 'application/json',
      success: function(result) {
        outputField.value = JSON.stringify(result, undefined, 2);;
      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });




  }

  copyButton.addEventListener('click', copyInputToOutput);

});
