/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.900Z
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
 * Operation: 'catalogInventoryStockRegistryV1UpdateStockItemBySkuPut'
 * Endpoint Path: '/V1/products/{productSku}/stockItems/{itemId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "productSku",
    "itemId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "productSku": "productSku",
    "itemId": "itemId",
    "backorders": "backorders",
    "enable_qty_increments": "enable_qty_increments",
    "extension_attributes": "extension_attributes",
    "is_decimal_divided": "is_decimal_divided",
    "is_in_stock": "is_in_stock",
    "is_qty_decimal": "is_qty_decimal",
    "item_id": "item_id",
    "low_stock_date": "low_stock_date",
    "manage_stock": "manage_stock",
    "max_sale_qty": "max_sale_qty",
    "min_qty": "min_qty",
    "min_sale_qty": "min_sale_qty",
    "notify_stock_qty": "notify_stock_qty",
    "product_id": "product_id",
    "qty": "qty",
    "qty_increments": "qty_increments",
    "show_default_notification_message": "show_default_notification_message",
    "stock_id": "stock_id",
    "stock_status_changed_auto": "stock_status_changed_auto",
    "use_config_backorders": "use_config_backorders",
    "use_config_enable_qty_inc": "use_config_enable_qty_inc",
    "use_config_manage_stock": "use_config_manage_stock",
    "use_config_max_sale_qty": "use_config_max_sale_qty",
    "use_config_min_qty": "use_config_min_qty",
    "use_config_min_sale_qty": "use_config_min_sale_qty",
    "use_config_notify_stock_qty": "use_config_notify_stock_qty",
    "use_config_qty_increments": "use_config_qty_increments",
    "stockItem": "stockItem",
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
        operationId: 'catalogInventoryStockRegistryV1UpdateStockItemBySkuPut',
        pathName: '/V1/products/{productSku}/stockItems/{itemId}',
        method: 'put',
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