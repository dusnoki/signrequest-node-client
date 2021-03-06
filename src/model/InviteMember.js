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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.InviteMember = factory(root.SignrequestClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InviteMember model module.
   * @module model/InviteMember
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>InviteMember</code>.
   * @alias module:model/InviteMember
   * @class
   * @param email {String} 
   */
  var exports = function(email) {
    var _this = this;

    _this['email'] = email;


  };

  /**
   * Constructs a <code>InviteMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteMember} obj Optional instance to populate.
   * @return {module:model/InviteMember} The populated <code>InviteMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('is_admin')) {
        obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
      }
      if (data.hasOwnProperty('is_owner')) {
        obj['is_owner'] = ApiClient.convertToType(data['is_owner'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} is_admin
   * @default false
   */
  exports.prototype['is_admin'] = false;
  /**
   * @member {Boolean} is_owner
   * @default false
   */
  exports.prototype['is_owner'] = false;



  return exports;
}));


