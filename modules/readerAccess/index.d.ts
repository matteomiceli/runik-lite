interface EpubMetaData {
    title?: string;
    author?: string;
    description?: string;
    isbn?: string;
    cover?: {
        path?: string;
        url?: string;
    };
    /** Path relative to the .opf file */
    opfRealtiveDir?: string;
    /** Preferred name filing order (eg. last, first) */
    authorFileAs?: string;
}
/** Pulls metadata out of an epub's *.opf file */
export function getEpubMetaData(file: File): Promise<EpubMetaData>;
export function getRelativeOpfDir(opfPath: string): string | undefined;
export function resolveRelativePath(relativeDir: string | undefined, path: string | undefined): string | undefined;
enum DeviceType {
    "kobo" = "Kobo",
    "kindle" = "Kindle",
    "generic" = "Generic"
}
type Books = {
    [key: string]: FileSystemDirectoryHandle | FileSystemFileHandle;
};
declare class Reader {
    name: string;
    type: DeviceType;
    constructor(dirHandle: FileSystemDirectoryHandle);
    addBook(file: File): Promise<void>;
    getBooks(): Promise<Books | undefined>;
    addDictionary(): void;
}
export const readerAccess: () => Promise<Reader>;

//# sourceMappingURL=index.d.ts.map
