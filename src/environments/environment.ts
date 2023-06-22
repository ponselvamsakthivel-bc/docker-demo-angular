export const environment = {
    production: true,
    idam_client_id:'CWwA7Q84GPlD1nF4ufxo6IDO6PIItiyS',
    uri: {
      api: {
        isApiGateWayEnabled: false,
        security: 'http://ppg-sand-security-alb-216831028.eu-west-2.elb.amazonaws.com',
        postgres: 'http://ppg-sand-core-alb-467822619.eu-west-2.elb.amazonaws.com',
        cii: 'https://conclave-cii-testing-talkative-oryx-hh.london.cloudapps.digital',
        wrapper: {
          apiGatewayEnabled: {
            user: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/user-profiles',
            organisation: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/organisation-profiles',
            contact: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/contacts',
            configuration: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/configurations',
            dataMigration: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/datamigration',
          },
          apiGatewayDisabled: {
            user: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/users',
            organisation: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/organisations',
            contact: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/contacts',
            configuration: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/configurations',
            dataMigration: 'http://ppg-sand-wrapper-alb-1485365645.eu-west-2.elb.amazonaws.com/datamigration',
          }
        }
      },
      web: {
        dashboard: 'http://ppg-sand-ccs-sso-alb-770694470.eu-west-2.elb.amazonaws.com'
      },
      ccsContactUrl: "https://www.crowncommercial.gov.uk/contact"
    },
    googleTagMangerId: 'GTM-TZCX5VP',
    cookieExpirationTimeInMinutes: 525600,
    bulkUploadPollingFrequencyInSeconds: 5,
    bulkUploadMaxFileSizeInBytes:1048576,
    bulkUploadTemplateFileUrl: 'https://sbx.api.crowncommercial.gov.uk/templates/DataMigrationTemplate.csv',
    usedPasswordThreshold: 5, //This value should be changed when Auth0 password history policy changed,
    listPageSize: 10,
    mailDecryptKey:'conclavesimpleemailencrypt',
    rollbar: {
      key: '39bb38f087ee4a6781b9d76a73200dd8',
      enable : false,
      security_log: false,
      environment: 'sandbox'
    },
    cookies_policy: {
      essentialcookies: {
          notify_admin_session: 20,
          cookie_policy: 1,
          ccs_sso_visitedsites: 60,
          opbs: 60,
          ccs_sso: 60,
          conclave: 60,
          XSRF_TOKEN: 30,
          XSRF_TOKEN_SVR: 30,
          AspNetCore_Antiforgery_GWNWkbbyKbw: 30
      },
      Auth0cookies: {
          auth0_compat: 3,
          did_compat: 6,
          did: 6,
          auth0: 3,
          __cf_bm: 30
      },
    },
    appSetting: {
     hideIDP:false,
     hideDelegation:false,
     hideBulkupload:false,
     hideAutoValidation:false,
     hideSimplifyRole:false,
     blockedScheme: ['GB-EDU',"GB-PPG"]
    },
  };
  
