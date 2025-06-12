
    export type RemoteKeys = 'profile/Profile';
    type PackageType<T> = T extends 'profile/Profile' ? typeof import('profile/Profile') :any;