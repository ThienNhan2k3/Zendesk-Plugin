export interface IAppData {
    context: {
        host: string;
        product: string;
        location: AppLocation;
        instanceGuid: string;
        account: {
            subdomain: string;
        };
        ticketId: number;
    };
    iframe_session_timeout: number;
    metadata: {
        appId: string;
        installationId: string;
        version: string;
        settings: {
            title: string;
        };
    };
}

export enum AppLocation {
    TICKET_SIDEBAR = 'ticket_sidebar',
    TICKET_EDITOR = 'ticket_editor',
    ADMIN = 'nav_bar',
    MODAL = 'modal',
}
  