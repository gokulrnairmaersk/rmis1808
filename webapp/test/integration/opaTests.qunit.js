sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/tst18083/project18083/test/integration/FirstJourney',
		'com/tst18083/project18083/test/integration/pages/ZC_TGRC_TEST_APPList',
		'com/tst18083/project18083/test/integration/pages/ZC_TGRC_TEST_APPObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_TGRC_TEST_APPList, ZC_TGRC_TEST_APPObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/tst18083/project18083') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_TGRC_TEST_APPList: ZC_TGRC_TEST_APPList,
					onTheZC_TGRC_TEST_APPObjectPage: ZC_TGRC_TEST_APPObjectPage
                }
            },
            opaJourney.run
        );
    }
);