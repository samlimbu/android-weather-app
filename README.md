# android-weather-app

# note

First find sass.js file under /node_modules/@ionic/app-scripts/dist/sass.js. inside search var postcssOptions and add from: undefined,

Finally should be like this:

var postcssOptions = {
            from: undefined,
            to: path_1.basename(sassConfig.outFile),
            map: autoPrefixerMapOptions
        };
