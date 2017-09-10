var flarum = require('flarum-gulp');

flarum({
    modules: {
        'botfactoryit/mdeditor': [
            'src/**/*.js'
        ]
    }
});
