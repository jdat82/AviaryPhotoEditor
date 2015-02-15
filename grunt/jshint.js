var files = [{
    src: ['grunt/*.js','src/**/*.js']
}];

module.exports = {

    options: {

        reporter: require('jshint-stylish'),

        // Enforcing
        camelcase     : true,     // true: Identifiers must be in camelCase
        curly         : false,    // true: Require {} for every new block or scope
        eqeqeq        : true,     // true: Require triple equals (===) for comparison
        forin         : true,     // true: Require filtering for..in loops with obj.hasOwnProperty()
        freeze        : true,     // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
        immed         : false,    // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
        indent        : 4,        // {int} Number of spaces to use for indentation
        latedef       : false,    // true: Require variables/functions to be defined before being used
        newcap        : true,     // true: Require capitalization of all constructor functions e.g. `new F()`
        noarg         : true,     // true: Prohibit use of `arguments.caller` and `arguments.callee`
        noempty       : true,     // true: Prohibit use of empty blocks
        nonbsp        : true,     // true: Prohibit non-breaking whitespace characters.
        nonew         : true,     // true: Prohibit use of constructors for side-effects (without assignment)
        plusplus      : true,     // true: Prohibit use of `++` & `--`
        quotmark      : 'single', // Quotation mark consistency:
                                    //   false    : do nothing (default)
                                    //   true     : ensure whatever is used is consistent
                                    //   single : require single quotes
                                    //   double : require double quotes
        undef         : true,     // true: Require all non-global variables to be declared (prevents global leaks)
        unused        : true,     // true: Require all defined variables be used
        strict        : false,    // true: Requires all functions run in ES5 Strict Mode
        maxdepth      : 5,        // {int} Max depth of nested blocks (within functions)
        maxcomplexity : 12,       // {int} Max cyclomatic complexity per function
        maxlen        : 160,      // {int} Max number of characters per line
        maxparams     : 5,        // {int} Max number of formal params allowed per function
        maxstatements : false,    // {int} Max number statements per function

        // Relaxing
        'asi'          : false,   // true: Tolerate Automatic Semicolon Insertion (no semicolons)
        'boss'         : false,   // true: Tolerate assignments where comparisons would be expected
        'debug'        : false,   // true: Allow debugger statements e.g. browser breakpoints.
        'eqnull'       : true,    // true: Tolerate use of `== null`
        'es5'          : false,   // true: Allow ES5 syntax (ex: getters and setters)
        'esnext'       : false,   // true: Allow ES.next (ES6) syntax (ex: `const`)
        'moz'          : false,   // true: Allow Mozilla specific syntax (extends and overrides esnext features)
                                  // (ex: `for each`, multiple try/catch, function expression…)
        'evil'         : false,   // true: Tolerate use of `eval` and `new Function()`
        'expr'         : true,    // true: Tolerate `ExpressionStatement` as Programs
        'funcscope'    : false,   // true: Tolerate defining variables inside control statements
        'globalstrict' : true,    // true: Allow global 'use strict' (also enables 'strict')
        'iterator'     : false,   // true: Tolerate using the `__iterator__` property
        'lastsemic'    : false,   // true: Tolerate omitting a semicolon for the last statement of a 1-line block
        'laxbreak'     : false,   // true: Tolerate possibly unsafe line breakings
        'laxcomma'     : false,   // true: Tolerate comma-first style coding
        'loopfunc'     : false,   // true: Tolerate functions being defined in loops
        'multistr'     : false,   // true: Tolerate multi-line strings
        'noyield'      : false,   // true: Tolerate generator functions with no yield statement in them.
        'notypeof'     : false,   // true: Tolerate invalid typeof operator values
        'proto'        : false,   // true: Tolerate using the `__proto__` property
        'scripturl'    : false,   // true: Tolerate script-targeted URLs
        'shadow'       : false,   // true: Allows re-define variables later in code e.g. `var x=1; x=2;`
        'sub'          : false,   // true: Tolerate using `[]` notation when it can still be expressed in dot notation
        'supernew'     : false,   // true: Tolerate `new function () { ... };` and `new Object;`
        'validthis'    : false,   // true: Tolerate using this in a non-constructor function

        // Environments
        browser       : true,     // Web Browser (window, document, etc)
        devel         : false,    // Development/debugging (alert, confirm, etc)
        jquery        : true,
        mocha         : true,
        node          : true,
        mootools      : false,
        couch         : false,
        jasmine       : false,
        qunit         : false,
        rhino         : false,
        shelljs       : false,
        prototypejs   : false,
        yui           : false,
        wsh           : false,
        worker        : false,
        nonstandard   : false,
        browserify    : false,
        dojo          : false,

        // Custom Globals
        globals : {
            'win'      : true,
            'get'      : true,
            '$body'    : true,
            'Backbone' : true,
            '_'        : true,
            'JST'      : true,
            'DEV'      : true,
            'Snap'     : true,
            'mina'     : true
        }
    },
    dev:{
        options:{
            debug     : true,     // true: Allow debugger statements e.g. browser breakpoints.
            devel     : true      // Development/debugging (alert, confirm, etc)
        },
        files:files
    },
    dist:{
        files:files
    }
};