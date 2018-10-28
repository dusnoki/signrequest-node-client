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
    define(['ApiClient', 'model/Document', 'model/Signer', 'model/Team1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Document'), require('./Signer'), require('./Team1'));
  } else {
    // Browser globals (root is window)
    if (!root.SignrequestClient) {
      root.SignrequestClient = {};
    }
    root.SignrequestClient.Event = factory(root.SignrequestClient.ApiClient, root.SignrequestClient.Document, root.SignrequestClient.Signer, root.SignrequestClient.Team1);
  }
}(this, function(ApiClient, Document, Signer, Team1) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version v1
   */

  /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('event_type')) {
        obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Boolean');
      }
      if (data.hasOwnProperty('delivered_on')) {
        obj['delivered_on'] = ApiClient.convertToType(data['delivered_on'], 'Date');
      }
      if (data.hasOwnProperty('callback_status_code')) {
        obj['callback_status_code'] = ApiClient.convertToType(data['callback_status_code'], 'Number');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('team')) {
        obj['team'] = Team1.constructFromObject(data['team']);
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = Document.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('signer')) {
        obj['signer'] = Signer.constructFromObject(data['signer']);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {module:model/Event.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Event.EventTypeEnum} event_type
   */
  exports.prototype['event_type'] = undefined;
  /**
   * @member {Boolean} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * @member {Date} delivered_on
   */
  exports.prototype['delivered_on'] = undefined;
  /**
   * @member {Number} callback_status_code
   */
  exports.prototype['callback_status_code'] = undefined;
  /**
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {module:model/Team1} team
   */
  exports.prototype['team'] = undefined;
  /**
   * @member {module:model/Document} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {module:model/Signer} signer
   */
  exports.prototype['signer'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ok"
     * @const
     */
    "ok": "ok",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };

  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeEnum = {
    /**
     * value: "convert_error"
     * @const
     */
    "convert_error": "convert_error",
    /**
     * value: "converted"
     * @const
     */
    "converted": "converted",
    /**
     * value: "sending_error"
     * @const
     */
    "sending_error": "sending_error",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "declined"
     * @const
     */
    "declined": "declined",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled",
    /**
     * value: "expired"
     * @const
     */
    "expired": "expired",
    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",
    /**
     * value: "viewed"
     * @const
     */
    "viewed": "viewed",
    /**
     * value: "downloaded"
     * @const
     */
    "downloaded": "downloaded",
    /**
     * value: "signer_signed"
     * @const
     */
    "signer_signed": "signer_signed",
    /**
     * value: "signer_email_bounced"
     * @const
     */
    "signer_email_bounced": "signer_email_bounced",
    /**
     * value: "signer_viewed_email"
     * @const
     */
    "signer_viewed_email": "signer_viewed_email",
    /**
     * value: "signer_viewed"
     * @const
     */
    "signer_viewed": "signer_viewed",
    /**
     * value: "signer_forwarded"
     * @const
     */
    "signer_forwarded": "signer_forwarded",
    /**
     * value: "signer_downloaded"
     * @const
     */
    "signer_downloaded": "signer_downloaded",
    /**
     * value: "signrequest_received"
     * @const
     */
    "signrequest_received": "signrequest_received"  };


  return exports;
}));


