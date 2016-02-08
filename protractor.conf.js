exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    specs: ['test/e2e/**/*.js'],
    jasmineNodeOpts: {
        showColors: true
    }
};
