/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.882Z
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
 * Operation: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost'
 * Endpoint Path: '/V1/guest-carts/{cartId}/payment-information'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "cartId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "cartId": "cartId",
    "city": "city",
    "company": "company",
    "country_id": "country_id",
    "custom_attributes": "custom_attributes",
    "customer_address_id": "customer_address_id",
    "customer_id": "customer_id",
    "email": "email",
    "gift_registry_id": "gift_registry_id",
    "extension_attributes": "extension_attributes",
    "fax": "fax",
    "firstname": "firstname",
    "id": "id",
    "lastname": "lastname",
    "middlename": "middlename",
    "postcode": "postcode",
    "prefix": "prefix",
    "region": "region",
    "region_code": "region_code",
    "region_id": "region_id",
    "same_as_billing": "same_as_billing",
    "save_in_address_book": "save_in_address_book",
    "street": "street",
    "suffix": "suffix",
    "telephone": "telephone",
    "vat_id": "vat_id",
    "billingAddress": "billingAddress",
    "additional_data": "additional_data",
    "agreement_ids": "agreement_ids",
    "method": "method",
    "po_number": "po_number",
    "paymentMethod": "paymentMethod",
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
        operationId: 'checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost',
        pathName: '/V1/guest-carts/{cartId}/payment-information',
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