
    export type RemoteKeys = 'notifications/Notification';
    type PackageType<T> = T extends 'notifications/Notification' ? typeof import('notifications/Notification') :any;