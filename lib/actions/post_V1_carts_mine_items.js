/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.835Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / magento-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/V1/carts/mine/items'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "extension_attributes": "extension_attributes",
    "item_id": "item_id",
    "name": "name",
    "price": "price",
    "bundle_options": "bundle_options",
    "configurable_item_options": "configurable_item_options",
    "custom_options": "custom_options",
    "downloadable_links": "downloadable_links",
    "downloadable_option": "downloadable_option",
    "custom_giftcard_amount": "custom_giftcard_amount",
    "giftcard_amount": "giftcard_amount",
    "giftcard_message": "giftcard_message",
    "giftcard_recipient_email": "giftcard_recipient_email",
    "giftcard_recipient_name": "giftcard_recipient_name",
    "giftcard_sender_email": "giftcard_sender_email",
    "giftcard_sender_name": "giftcard_sender_name",
    "giftcard_item_option": "giftcard_item_option",
    "product_option": "product_option",
    "product_type": "product_type",
    "qty": "qty",
    "quote_id": "quote_id",
    "sku": "sku",
    "cartItem": "cartItem",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/V1/carts/mine/items',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}