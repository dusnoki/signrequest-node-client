/*
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SignrequestClient);
  }
}(this, function(expect, SignrequestClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SignrequestClient.User();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new SignrequestClient.User();
      //expect(instance).to.be.a(SignrequestClient.User);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new SignrequestClient.User();
      //expect(instance).to.be();
    });

    it('should have the property first_name (base name: "first_name")', function() {
      // uncomment below and update the code to test the property first_name
      //var instance = new SignrequestClient.User();
      //expect(instance).to.be();
    });

    it('should have the property last_name (base name: "last_name")', function() {
      // uncomment below and update the code to test the property last_name
      //var instance = new SignrequestClient.User();
      //expect(instance).to.be();
    });

    it('should have the property display_name (base name: "display_name")', function() {
      // uncomment below and update the code to test the property display_name
      //var instance = new SignrequestClient.User();
      //expect(instance).to.be();
    });

  });

}));
