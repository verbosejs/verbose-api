const boot = require('../index');
const verboseApi = require('../lib/verbose-api');

test('Index file to fetch correct lin', () => {
    expect(boot).toEqual(verboseApi);
});