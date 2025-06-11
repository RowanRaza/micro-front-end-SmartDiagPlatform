
    export type RemoteKeys = 'dashboard/Dashboard';
    type PackageType<T> = T extends 'dashboard/Dashboard' ? typeof import('dashboard/Dashboard') :any;