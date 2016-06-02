(function(global) {

    var map = {
        'app':                        'app',
        '@angular':                   'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        'ng2-bootstrap':              'node_modules/ng2-bootstrap/components',
        '@angular2-material':         'node_modules/@angular2-material'
    };
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'ng2-bootstrap':              { defaultExtension: 'js' },
        '@angular2-material/core':    {
                                        format: 'cjs',
                                        defaultExtension: 'js',
                                        main: 'core.js'
                                      },
        '@angular2-material/input':   {
                                        format: 'cjs',
                                        defaultExtension: 'js',
                                        main: 'input.js'
                                      },
        '@angular2-material/button':   {
                                        format: 'cjs',
                                        defaultExtension: 'js',
                                        main: 'button.js'
                                      },
        '@angular2-material/icon':    {
                                        format: 'cjs',
                                        defaultExtension: 'js',
                                        main: 'icon.js'
                                      },
        '@angular2-material/list':    {
                                        format: 'cjs',
                                        defaultExtension: 'js',
                                        main: 'list.js'
                                      }

    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);
