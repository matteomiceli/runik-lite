interface EpubMetaData {
    title?: string;
    author?: string;
    authorFileAs?: string;
}
/** Pulls metadata out of an epub's *.opf file */
export function getEpubMetaData(file: File): Promise<EpubMetaData>;
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
export const readerAccess: () => Promise<Reader | null>;

//# sourceMappingURL=index.d.ts.map
