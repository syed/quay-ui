import {AxiosRequestConfig} from 'axios';
import {mock} from 'src/tests/fake-db/MockAxios';

const response = {
  account_recovery_mode: false,
  config: {
    AUTHENTICATION_TYPE: 'Database',
    AVATAR_KIND: 'local',
    BRANDING: {
      footer_img: null,
      footer_url: null,
      logo: '/static/img/quay-horizontal-color.svg',
    },
    CHANNEL_COLORS: [
      '#969696',
      '#aec7e8',
      '#ff7f0e',
      '#ffbb78',
      '#2ca02c',
      '#98df8a',
      '#d62728',
      '#ff9896',
      '#9467bd',
      '#c5b0d5',
      '#8c564b',
      '#c49c94',
      '#e377c2',
      '#f7b6d2',
      '#7f7f7f',
      '#c7c7c7',
      '#bcbd22',
      '#1f77b4',
      '#17becf',
      '#9edae5',
      '#393b79',
      '#5254a3',
      '#6b6ecf',
      '#9c9ede',
      '#9ecae1',
      '#31a354',
      '#b5cf6b',
      '#a1d99b',
      '#8c6d31',
      '#ad494a',
      '#e7ba52',
      '#a55194',
    ],
    CONTACT_INFO: [],
    DEBUG: false,
    DOCUMENTATION_ROOT: 'https://docs.projectquay.io/',
    ENTERPRISE_LOGO_URL: '/static/img/quay-horizontal-color.svg',
    // ENTERPRISE_DARK_LOGO_URL:
    //  '/static/img/quay-horizontal-whiteblue-nobackground.svg',
    FEATURE_PROXY_CACHE: false,
    FEATURE_QUOTA_MANAGEMENT: false,
    FEATURE_REPO_MIRROR: false,
    LOCAL_OAUTH_HANDLER: '/oauth/localapp',
    PREFERRED_URL_SCHEME: 'https',
    RECAPTCHA_SITE_KEY: null,
    REGISTRY_TITLE: 'Mock Quay',
    REGISTRY_TITLE_SHORT: 'Quay',
    SEARCH_MAX_RESULT_PAGE_COUNT: 10,
    SEARCH_RESULTS_PER_PAGE: 10,
    SENTRY_PUBLIC_DSN: null,
    SERVER_HOSTNAME: 'quay-ui.quaydev.org',
    SETUP_COMPLETE: true,
    STATIC_SITE_BUCKET: null,
    TAG_EXPIRATION_OPTIONS: ['2w'],
  },
  external_login: [],
  features: {
    ACTION_LOG_ROTATION: false,
    ADVERTISE_V2: true,
    AGGREGATED_LOG_COUNT_RETRIEVAL: true,
    ANONYMOUS_ACCESS: true,
    APP_REGISTRY: false,
    APP_SPECIFIC_TOKENS: true,
    BILLING: false,
    BITBUCKET_BUILD: false,
    BLACKLISTED_EMAILS: false,
    BUILD_SUPPORT: true,
    CHANGE_TAG_EXPIRATION: true,
    CLEAR_EXPIRED_RAC_ENTRIES: false,
    DIRECT_LOGIN: true,
    DISABLE_PULL_LOGS_FOR_FREE_NAMESPACES: false,
    EXPORT_COMPLIANCE: false,
    EXTENDED_REPOSITORY_NAMES: true,
    FIPS: false,
    GARBAGE_COLLECTION: true,
    GENERAL_OCI_SUPPORT: true,
    GITHUB_BUILD: false,
    GITHUB_LOGIN: false,
    GITLAB_BUILD: false,
    GOOGLE_LOGIN: false,
    HELM_OCI_SUPPORT: true,
    INVITE_ONLY_USER_CREATION: false,
    LIBRARY_SUPPORT: true,
    LOG_EXPORT: true,
    MAILING: false,
    MANIFEST_SIZE_BACKFILL: true,
    NAMESPACE_GARBAGE_COLLECTION: true,
    NONSUPERUSER_TEAM_SYNCING_SETUP: false,
    PARTIAL_USER_AUTOCOMPLETE: true,
    PERMANENT_SESSIONS: true,
    PROXY_CACHE: false,
    PROXY_STORAGE: false,
    PUBLIC_CATALOG: false,
    QUOTA_MANAGEMENT: false,
    RATE_LIMITS: false,
    READER_BUILD_LOGS: false,
    READONLY_APP_REGISTRY: false,
    RECAPTCHA: false,
    REPOSITORY_ACTION_COUNTER: true,
    REPOSITORY_GARBAGE_COLLECTION: true,
    REPO_MIRROR: false,
    REQUIRE_ENCRYPTED_BASIC_AUTH: false,
    REQUIRE_TEAM_INVITE: true,
    RESTRICTED_V1_PUSH: false,
    SECURITY_NOTIFICATIONS: true,
    SECURITY_SCANNER: true,
    SIGNING: false,
    STORAGE_REPLICATION: false,
    SUPER_USERS: true,
    TEAM_SYNCING: false,
    USERNAME_CONFIRMATION: true,
    USER_CREATION: true,
    USER_INITIALIZE: false,
    USER_LAST_ACCESSED: true,
    USER_LOG_ACCESS: false,
    USER_METADATA: false,
    USER_RENAME: false,
  },
  oauth: {
    GITHUB_TRIGGER_CONFIG: {
      AUTHORIZE_ENDPOINT: 'https://github.com/login/oauth/authorize',
      CLIENT_ID: null,
      GITHUB_ENDPOINT: 'https://github.com',
      ORG_RESTRICT: false,
    },
    GITLAB_TRIGGER_CONFIG: {
      AUTHORIZE_ENDPOINT: 'https://gitlab.com/oauth/authorize',
      CLIENT_ID: null,
      GITLAB_ENDPOINT: 'https://gitlab.com',
    },
  },
  registry_state: 'normal',
};

mock.onGet('/config').reply((request: AxiosRequestConfig) => {
  return [200, response];
});
