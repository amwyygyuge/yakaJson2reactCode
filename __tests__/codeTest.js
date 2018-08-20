
import readConfig from './../dist'
import demo from './../demo.json';
const fs = require('fs')
describe('yakaJson to React fileds', function () {
    describe('numbner', function () {
        it('should be false', function () {
            const data = readConfig(demo)
            console.log(data.getData().reactCode);

            // expect(data).not.toBeNull(data)
        });
    });
});