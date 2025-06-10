
    export type RemoteKeys = 'auth/Login' | 'auth/AuthContext';
    type PackageType<T> = T extends 'auth/AuthContext' ? typeof import('auth/AuthContext') :T extends 'auth/Login' ? typeof import('auth/Login') :any;