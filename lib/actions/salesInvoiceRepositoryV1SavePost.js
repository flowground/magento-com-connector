/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.886Z
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
 * Operation: 'salesInvoiceRepositoryV1SavePost'
 * Endpoint Path: '/V1/invoices/'
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
    "base_currency_code": "base_currency_code",
    "base_discount_amount": "base_discount_amount",
    "base_discount_tax_compensation_amount": "base_discount_tax_compensation_amount",
    "base_grand_total": "base_grand_total",
    "base_shipping_amount": "base_shipping_amount",
    "base_shipping_discount_tax_compensation_amnt": "base_shipping_discount_tax_compensation_amnt",
    "base_shipping_incl_tax": "base_shipping_incl_tax",
    "base_shipping_tax_amount": "base_shipping_tax_amount",
    "base_subtotal": "base_subtotal",
    "base_subtotal_incl_tax": "base_subtotal_incl_tax",
    "base_tax_amount": "base_tax_amount",
    "base_to_global_rate": "base_to_global_rate",
    "base_to_order_rate": "base_to_order_rate",
    "base_total_refunded": "base_total_refunded",
    "billing_address_id": "billing_address_id",
    "can_void_flag": "can_void_flag",
    "comments": "comments",
    "created_at": "created_at",
    "discount_amount": "discount_amount",
    "discount_description": "discount_description",
    "discount_tax_compensation_amount": "discount_tax_compensation_amount",
    "email_sent": "email_sent",
    "entity_id": "entity_id",
    "base_customer_balance_amount": "base_customer_balance_amount",
    "base_gift_cards_amount": "base_gift_cards_amount",
    "customer_balance_amount": "customer_balance_amount",
    "gift_cards_amount": "gift_cards_amount",
    "extension_attributes": "extension_attributes",
    "global_currency_code": "global_currency_code",
    "grand_total": "grand_total",
    "increment_id": "increment_id",
    "is_used_for_refund": "is_used_for_refund",
    "items": "items",
    "order_currency_code": "order_currency_code",
    "order_id": "order_id",
    "shipping_address_id": "shipping_address_id",
    "shipping_amount": "shipping_amount",
    "shipping_discount_tax_compensation_amount": "shipping_discount_tax_compensation_amount",
    "shipping_incl_tax": "shipping_incl_tax",
    "shipping_tax_amount": "shipping_tax_amount",
    "state": "state",
    "store_currency_code": "store_currency_code",
    "store_id": "store_id",
    "store_to_base_rate": "store_to_base_rate",
    "store_to_order_rate": "store_to_order_rate",
    "subtotal": "subtotal",
    "subtotal_incl_tax": "subtotal_incl_tax",
    "tax_amount": "tax_amount",
    "total_qty": "total_qty",
    "transaction_id": "transaction_id",
    "updated_at": "updated_at",
    "entity": "entity",
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
        operationId: 'salesInvoiceRepositoryV1SavePost',
        pathName: '/V1/invoices/',
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