import {BuildOptions} from "./types/config";
import webpack from "webpack";

import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths: {entry, build, htmlTemplate}, mode, isDev} = options;
    return {
        mode,
        entry,
        module: {
            rules: buildLoaders(options),
        },
        // типы файлов, для которых не указываются расширения при импорте
        resolve: buildResolvers(),
        //настройка куда и как будет собираться приложение
        output: {
            // filename - название готовой сборки
            // [name] - шаблон имени
            filename: "[contenthash].[name].js",

            // путь, где будет лежать сборка
            path: build,
            clean: true,
        },
        plugins: buildPlugins(htmlTemplate),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}