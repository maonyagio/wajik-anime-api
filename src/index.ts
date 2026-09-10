import { clientCache } from "@middlewares/cache.js";
import appConfig from "@configs/app.config.js";
import express from "express";
import errorHandler from "@middlewares/errorHandler.js";
import otakudesuRouter from "@routes/otakudesu.routes.js";
import samehadakuRouter from "@routes/samehadaku.routes.js";
import kuramanimeRouter from "@routes/kuramanime.routes.js";
import oploverzRouter from "@routes/oploverz.routes.js";
import setPayload from "@helpers/setPayload.js";
import cors from "cors";

const { PORT } = appConfig;
const app = express();

app.use(cors());
app.use(clientCache(1));

app.get("/", (req, res) => {
  const routes = [
    {
      method: "GET",
      path: "/otakudesu",
      description: "Otakudesu",
      pathParams: [],
      queryParams: [],
    },
    {
      method: "GET",
      path: "/kuramanime",
      description: "Kuramanime",
      pathParams: [],
      queryParams: [],
    },
    {
      method: "GET",
      path: "/oploverz",
      description: "Oploverz",
      pathParams: [],
      queryParams: [],
    },
  ];

  res.json(
    setPayload(res, {
      data: { routes },
    }),
  );
});

app.use("/otakudesu", otakudesuRouter);
app.use("/kuramanime", kuramanimeRouter);
app.use("/samehadaku", samehadakuRouter);
app.use("/oploverz", oploverzRouter);

app.use(errorHandler);

const SERVER_PORT = Number(process.env.PORT || PORT);

app.listen(SERVER_PORT, '0.0.0.0', () => {
  console.log(`server is running on http://0.0.0.0:${SERVER_PORT}`);
});
      description: "Oploverz",
      pathParams: [],
      queryParams: [],
    },
  ];

  res.json(
    setPayload(res, {
      data: { routes },
    }),
  );
});

app.use("/otakudesu", otakudesuRouter);
app.use("/kuramanime", kuramanimeRouter);
app.use("/samehadaku", samehadakuRouter);
app.use("/oploverz", oploverzRouter);

app.use(errorHandler);

const SERVER_PORT = Number(process.env.PORT || PORT);

app.listen(SERVER_PORT, '0.0.0.0', () => {
  console.log(`server is running on http://0.0.0.0:${SERVER_PORT}`);
});
      description: "Oploverz",
      pathParams: [],
      queryParams: [],
    },
  ];

  res.json(
    setPayload(res, {
      data: { routes },
    }),
  );
});

app.use("/otakudesu", otakudesuRouter);
app.use("/kuramanime", kuramanimeRouter);
app.use("/samehadaku", samehadakuRouter);
app.use("/oploverz", oploverzRouter);

app.use(errorHandler);

app.listen(SERVER_PORT, '0.0.0.0', () => {
  console.log(`server is running on http://0.0.0.0:${SERVER_PORT}`);
});

