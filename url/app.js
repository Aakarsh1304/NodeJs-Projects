import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
const port = 3010;
const DATA_FILE = path.join("data", "links.json");
const serverFile = async (res, filePath, contenttype) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contenttype });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": contenttype });
    res.end("404 Page Not Found");
  }
};
const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};
const savelinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};
const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      return serverFile(res, path.join("public", "url.html"), "text/html");
    }

    if (req.url === "/url.css") {
      return serverFile(res, path.join("public", "url.css"), "text/css");
    }
    else if(req.url ==="/links"){
    const links = await loadLinks();
    res.writeHead(200, { "Content-Type": "application/json" });
     return res.end(JSON.stringify(links));
    }
    else{
      const links=await loadLinks();
      const shortCode = req.url.slice(1);
      console.log("link redirect",req.url);
      if(links[shortCode]) {
        res.writeHead(302 , { location: links[shortCode] });
        return res.end();
      }
       res.writeHead(404 , { "Content-Type": "text/plain" });
        return res.end("Url no found");
      
    }
  }
  if (req.method === "POST" && req.url == "/shorten") {
    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      console.log(body);
      const { url, shortCode } = JSON.parse(body);
      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end(JSON.stringify({ error: "URL is required" }));
      }
      const Finalcode = shortCode || crypto.randomBytes(4).toString("hex");
      if (links[Finalcode]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Short code already exists");
      }
      links[Finalcode] = url;
      await savelinks(links);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ sucess: true, shortCode: Finalcode }));
    });
  }
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
