var grunt = require('grunt');
var glob = require('glob');
grunt.loadNpmTasks('grunt-purifycss');

var cssSource = glob.sync('./dist/beta/styles.*.css').toString();

grunt.initConfig({
  purifycss: {
    options: {
      info: true,
      minify: true,
      rejected: false, // Logs the CSS rules that were removed
      whitelist: ['*transition*', '*dimmer*'],
    },
    target: {
      cwd: '.',
      src: ['./src/app/**/*.ts', './src/app/**/*.html',
            './dist/beta/*.js', './dist/beta/*.html'
        // './node_modules/**/*.html,', './node_modules/**/*.ts'
      ],
      css: [cssSource],
      dest: cssSource
    },
  },
});
