var files = {
    '<%=build%>/app.css': [
        'src/**/*.styl',
        'resources/font/icomoon/style.css'
    ]
};

module.exports = {
    options:{
        paths: ['src/common/styles/'],
        banner: '/* John Grey on <%= grunt.template.today() %> */'
    },
    dev:{
        options:{
            compress:false
        },
        files:files
    },
    dist:{
        files:files
    }
};