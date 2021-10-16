export const environment = {
    production: false,
    idam_client_id: 'IDAM_ID',
    uri: {
      api: {
        isApiGateWayEnabled: true,
        security: 'https://pre.api.crowncommercial.gov.uk',
        //security: 'https://pre.api.crowncommercial.gov.uk',
        postgres: 'https://pre.api.crowncommercial.gov.uk/core',
        //postgres: 'https://pre.api.crowncommercial.gov.uk/core',
        wrapper: {
          apiGatewayEnabled: {
            user: 'https://pre.api.crowncommercial.gov.uk/user-profiles',
            organisation: 'https://pre.api.crowncommercial.gov.uk/organisation-profiles',
            contact: 'https://pre.api.crowncommercial.gov.uk/contacts',
            configuration: 'https://pre.api.crowncommercial.gov.uk/configurations',
          },
          apiGatewayDisabled: {
            user: 'https://preprod-api-wrapper.london.cloudapps.digital/users',
            organisation: 'https://preprod-api-wrapper.london.cloudapps.digital/organisations',
            contact: 'https://preprod-api-wrapper.london.cloudapps.digital/contacts',
            configuration: 'https://preprod-api-wrapper.london.cloudapps.digital/configurations',
          }
        }
      },
      web: {
        //dashboard: 'https://preprod-ccs-sso.london.cloudapps.digital'
        dashboard: 'https://preprod.identify.crowncommercial.gov.uk'
      },
      ccsContactUrl: "https://www.crowncommercial.gov.uk/contact"
    },
    
    usedPasswordThreshold: 5, //This value should be changed when Auth0 password history policy changed,
    listPageSize: 10,
    rollbar: {
      key: 'ROLLBAR',
      enable: true
    }
  };
  
  