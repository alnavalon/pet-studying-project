
export type BuildMode = 'production' | 'development';

export interface BuildParts {
    entry: string,
    build: string,
    htmlTemplate: string,
    staticFiles: string,
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
}

export interface BuildOptions extends BuildEnv{
    paths: BuildParts,
    isDev: boolean,
}
