
    export type RemoteKeys = 'users/Users';
    type PackageType<T> = T extends 'users/Users' ? typeof import('users/Users') :any;