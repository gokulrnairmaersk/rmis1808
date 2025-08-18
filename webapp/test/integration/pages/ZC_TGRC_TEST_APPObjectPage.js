sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.tst18083.project18083',
            componentId: 'ZC_TGRC_TEST_APPObjectPage',
            contextPath: '/ZC_TGRC_TEST_APP'
        },
        CustomPageDefinitions
    );
});