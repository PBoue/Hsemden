/// <reference types="vite/client" />

type ViteAuthString = string;

declare interface ImportMetaEnv {
    readonly VITE_REQUIRE_AUTH?: 'true' | 'false';
    readonly VITE_AUTH_USERNAME?: ViteAuthString;
    readonly VITE_AUTH_PASSWORD?: ViteAuthString;
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}
