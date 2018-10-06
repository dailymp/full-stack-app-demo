class RunExpress {
    constructor() {
        this.startWebServer();
    }

    startWebServer() {
        let express = require('express');
        let expressWebServer = express();

        expressWebServer.get('*.js', (req, res, next) => {
            console.log("REQUEST URL: ", req.url);

            if (req.url !== "/manifest.js"
                    && req.url !== "/vendorStyles.js"
                        && req.url !== "/styles.js") {
                req.url = req.url + '.gz';
                res.set('Content-Encoding', 'gzip');
            }

            next();
        });

        expressWebServer.use(express.static(__dirname + '/dist/'));

        expressWebServer.listen(3001,() => {
            console.log('Express WebServer Started port: ' + 3001);
            console.log('Reading Directory: ' + __dirname + '/dist');
        });
    }
}

new RunExpress();