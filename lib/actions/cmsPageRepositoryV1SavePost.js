/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.853Z
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
 * Operation: 'cmsPageRepositoryV1SavePost'
 * Endpoint Path: '/V1/cmsPage'
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
    "active": "active",
    "content": "content",
    "content_heading": "content_heading",
    "creation_time": "creation_time",
    "custom_layout_update_xml": "custom_layout_update_xml",
    "custom_root_template": "custom_root_template",
    "custom_theme": "custom_theme",
    "custom_theme_from": "custom_theme_from",
    "custom_theme_to": "custom_theme_to",
    "id": "id",
    "identifier": "identifier",
    "layout_update_xml": "layout_update_xml",
    "meta_description": "meta_description",
    "meta_keywords": "meta_keywords",
    "meta_title": "meta_title",
    "page_layout": "page_layout",
    "sort_order": "sort_order",
    "title": "title",
    "update_time": "update_time",
    "page": "page",
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
        operationId: 'cmsPageRepositoryV1SavePost',
        pathName: '/V1/cmsPage',
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