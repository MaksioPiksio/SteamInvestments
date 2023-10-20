import express from "express";
import cors from "cors";
import request from "request"; // Upewnij się, że zainstalowałeś moduł "request".

const app = express();

app.use(cors());

app.get("/buffData/:goods_id", (req, res) => {
    const { goods_id } = req.params;
    const url = `https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=${goods_id}`;
    req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
    console.log("Serwer proxy uruchomiony na porcie 3000");
});
