import express from 'express';
import cors from 'cors';
import body_parser from 'body-parser';
import routes from '../router/routes';
import env from './environment';

const app = express();

//setting cors
app.use(cors({ origin: '*' }));

//configuring body parse
app.use(body_parser.json({ limit: '10mb' }));
app.use(body_parser.urlencoded({ limit: '10mb', extended: true }));

//adding routes
app.use(routes);

const start = ():void => {
    app.listen(env.port, ():void => {
        console.log(`server up 🙂\nport: ${env.port}`);
    });
}

export default start