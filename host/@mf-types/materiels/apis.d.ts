
    export type RemoteKeys = 'materiels/Materiels';
    type PackageType<T> = T extends 'materiels/Materiels' ? typeof import('materiels/Materiels') :any;