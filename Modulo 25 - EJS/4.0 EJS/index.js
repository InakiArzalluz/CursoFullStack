import express from 'express'
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    var dayNumber = (new Date()).getDay();
    var is_weekend = dayNumber === 0 || dayNumber === 6;
    var week_moment = is_weekend ? 'the weekend' : 'a weekday';
    var thing_to_do = is_weekend ? 'have fun' : 'work hard';
    res.render(`${__dirname}/views/mySolution.ejs`, {
        week_moment: week_moment,
        thing_to_do: thing_to_do
    });
});

app.listen(port, (err) => {
    console.log(`Server running on port ${port}`);
});