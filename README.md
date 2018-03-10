# android-weather-app

using ionic

# note

Find sass.js file under /node_modules/@ionic/app-scripts/dist/sass.js. inside search var postcssOptions and add from: undefined,

var postcssOptions = {
            from: undefined,
            to: path_1.basename(sassConfig.outFile),
            map: autoPrefixerMapOptions
        };
