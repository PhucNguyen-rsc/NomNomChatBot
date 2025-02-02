import express from "express"
import answer from "./openai.mjs";
import cors from 'cors';

const port =process.env.port || 3000;
const app = express()
app.use(cors());
app.use(express.json());

app.post("/answer", async (req, res) =>{
    const message = await req.body.message;
    if (message === ''){
        res.json({response:null})
    }
    else{
        const response = await answer(message)
        console.log("response", response)
        res.json({response:response})
    }
})

app.listen(port)