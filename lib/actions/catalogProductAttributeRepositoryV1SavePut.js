/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.897Z
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
 * Operation: 'catalogProductAttributeRepositoryV1SavePut'
 * Endpoint Path: '/V1/products/attributes/{attributeCode}'
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
    "attributeCode"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "attributeCode": "attributeCode",
    "apply_to": "apply_to",
    "attribute_code": "attribute_code",
    "attribute_id": "attribute_id",
    "backend_model": "backend_model",
    "backend_type": "backend_type",
    "custom_attributes": "custom_attributes",
    "default_frontend_label": "default_frontend_label",
    "default_value": "default_value",
    "entity_type_id": "entity_type_id",
    "extension_attributes": "extension_attributes",
    "frontend_class": "frontend_class",
    "frontend_input": "frontend_input",
    "frontend_labels": "frontend_labels",
    "is_comparable": "is_comparable",
    "is_filterable": "is_filterable",
    "is_filterable_in_grid": "is_filterable_in_grid",
    "is_filterable_in_search": "is_filterable_in_search",
    "is_html_allowed_on_front": "is_html_allowed_on_front",
    "is_required": "is_required",
    "is_searchable": "is_searchable",
    "is_unique": "is_unique",
    "is_used_for_promo_rules": "is_used_for_promo_rules",
    "is_used_in_grid": "is_used_in_grid",
    "is_user_defined": "is_user_defined",
    "is_visible": "is_visible",
    "is_visible_in_advanced_search": "is_visible_in_advanced_search",
    "is_visible_in_grid": "is_visible_in_grid",
    "is_visible_on_front": "is_visible_on_front",
    "is_wysiwyg_enabled": "is_wysiwyg_enabled",
    "note": "note",
    "options": "options",
    "position": "position",
    "scope": "scope",
    "source_model": "source_model",
    "used_for_sort_by": "used_for_sort_by",
    "used_in_product_listing": "used_in_product_listing",
    "validation_rules": "validation_rules",
    "attribute": "attribute",
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
        operationId: 'catalogProductAttributeRepositoryV1SavePut',
        pathName: '/V1/products/attributes/{attributeCode}',
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