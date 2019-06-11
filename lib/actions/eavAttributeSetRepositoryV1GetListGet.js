/**
 * Auto-generated action file for "Magento Enterprise" API.
 *
 * Generated at: 2019-06-06T13:12:39.876Z
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
 * Operation: 'eavAttributeSetRepositoryV1GetListGet'
 * Endpoint Path: '/V1/eav/attribute-sets/list'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "searchCriteria[filterGroups][][filters][][field]",
    "searchCriteria[filterGroups][][filters][][value]",
    "searchCriteria[filterGroups][][filters][][conditionType]",
    "searchCriteria[sortOrders][][field]",
    "searchCriteria[sortOrders][][direction]",
    "searchCriteria[pageSize]",
    "searchCriteria[currentPage]"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "searchCriteria_filterGroups____filters____field_": "searchCriteria[filterGroups][][filters][][field]",
    "searchCriteria_filterGroups____filters____value_": "searchCriteria[filterGroups][][filters][][value]",
    "searchCriteria_filterGroups____filters____conditionType_": "searchCriteria[filterGroups][][filters][][conditionType]",
    "searchCriteria_sortOrders____field_": "searchCriteria[sortOrders][][field]",
    "searchCriteria_sortOrders____direction_": "searchCriteria[sortOrders][][direction]",
    "searchCriteria_pageSize_": "searchCriteria[pageSize]",
    "searchCriteria_currentPage_": "searchCriteria[currentPage]"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

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
        operationId: 'eavAttributeSetRepositoryV1GetListGet',
        pathName: '/V1/eav/attribute-sets/list',
        method: 'get',
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