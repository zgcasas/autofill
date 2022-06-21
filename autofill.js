(function(win, doc, $, undefined) {
  'use strict';

  // Don't run if jQuery isn't loaded
  if (typeof window.jQuery === 'undefined') {
    return;
  }

  var _rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Load FakerJS library
  $.getScript('//cdnjs.cloudflare.com/ajax/libs/Faker/0.7.2/MinFaker.js')
    .done(function() {
    
      console.log('Loaded');

      var faker = win.Faker;
      var email = 'jcasas.kooomo+' + faker.Name.firstName().toLowerCase() + '@gmail.com';

      $('[name="user[email]"]').val(email);
      $('[name="user[passwd]"]').val('Qwerty123.');
      $('[name="user[password_confirm]"]').val('Qwerty123.');
      $('[name="user[first_name]"]').val(faker.Name.firstName());
      $('[name="user[last_name]]"]').val(faker.Name.lastName());
      $('[name="shipping_address[first_name]"]').val(faker.Name.firstName());
      $('[name="shipping_address[last_name]"]').val(faker.Name.lastName());
      $('[name="shipping_address[addr_1]"]').val(faker.Address.streetAddress());
      $('[name="shipping_address[city]"]').val(faker.Address.city());
      $('[name="shipping_address[post_code]"]').val(_rand(10000, 99999));
      $('[name="shipping_address[telephone]"]').val('0123456789');
    
      var countries = [73, 106, 66];
      $('[name="shipping_address[country_id]"]').val(countries[_rand(0, 2)]).change();
    
    
      $('[name=accept_privacy]').prop('checked', true);
    
      
      async function waitForState() {
        $('[name="shipping_address[state_id]"]').val($('[name="shipping_address[state_id] option:second').val());
      }
    
      sleep(3000);
      waitForState();
    
      
    
  }).fail(function() {
      win.console.error('ERROR: FakerJS not loaded!');
    });

}(window, window.document, window.jQuery));
