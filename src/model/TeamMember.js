/**
 * SignRequest API
 * API for SignRequest.com
 *
 * OpenAPI spec version: v1
 * Contact: tech-support@signrequest.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Team1', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Team1'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.TeamMember = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.Team1, root.SignrequestClient.User);
  }
}(this, function(ApiClient, Team1, User) {
  'use strict';




  /**
   * The TeamMember model module.
   * @module model/TeamMember
   * @version v1
   */

  /**
   * Constructs a new <code>TeamMember</code>.
   * @alias module:model/TeamMember
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TeamMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamMember} obj Optional instance to populate.
   * @return {module:model/TeamMember} The populated <code>TeamMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('team')) {
        obj['team'] = Team1.constructFromObject(data['team']);
      }
      if (data.hasOwnProperty('is_admin')) {
        obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('is_owner')) {
        obj['is_owner'] = ApiClient.convertToType(data['is_owner'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/Team1} team
   */
  exports.prototype['team'] = undefined;
  /**
   * @member {Boolean} is_admin
   */
  exports.prototype['is_admin'] = undefined;
  /**
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {Boolean} is_owner
   */
  exports.prototype['is_owner'] = undefined;



  return exports;
}));


