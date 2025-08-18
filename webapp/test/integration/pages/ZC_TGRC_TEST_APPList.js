sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.tst18083.project18083',
            componentId: 'ZC_TGRC_TEST_APPList',
            contextPath: '/ZC_TGRC_TEST_APP'
        },
        CustomPageDefinitions
    );
});