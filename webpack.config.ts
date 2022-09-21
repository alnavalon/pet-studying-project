// берем путь до корневой папки
import path from "path";

// plugin вебпака для инджекта JS в HTML
import webpack from "webpack";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildParts} from "./config/build/types/config";

    // {
//
//     mode: "development",
//     // entry - входная точка приложения
//     // __dirname - папка, в которой мы находимся
//     // функция resolve "склеивает" путь, работает корректно в любой ОС
//     entry: path.resolve(__dirname, 'src', 'index.ts'),
//
//     module: {
//         rules: buildLoaders(),
//     },
//
//     // типы файлов, для которых не указываются расширения при импорте
//     resolve: buildResolvers(),
//
//     //настройка куда и как будет собираться приложение
//     output: {
//         // filename - название готовой сборки
//         // [name] - шаблон имени
//         filename: "[contenthash].[name].js",
//
//         // путь, где будет лежать сборка
//         path: path.resolve(__dirname, 'build'),
//         clean: true,
//     },
//     plugins: buildPlugins(),
// };

export default (env: BuildEnv) => {

    const mode = env.mode ?? 'development';
    const port = env.port ?? 3000;

    const paths: BuildParts = {
        build: path.resolve(__dirname, 'build', mode),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
        staticFiles: path.join(__dirname, 'public'),
    }
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
    return config;
};

