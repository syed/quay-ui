export enum NavigationPath {
    
    // Side NAV
    home = '/',
    search = '/search',
    namespace = '/namespaces',
    builds ='/builds',
    administration = '/administration',


    // Repositories Nav
    repositories = '/namespaces/:reponame',
    repositoriesTab = '/namespaces/:reponame/repo',
    teamMembershipTab = '/namespaces/:reponame/team',
    robotAccountTab = '/namespaces/:reponame/robotacct',
    defaultPermissionsTab = '/namespaces/:reponame/permissions',
    oauth = '/namespaces/:reponame/oauth',
    usagelogs = '/namespaces/:reponame/logs',
    settings = '/namespaces/:reponame/settings'

}