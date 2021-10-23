import ConfigParser from "./parser";
import fs from "fs";
import util from "util";

(async () => {
  const readFile = (filename: string): Promise<string> =>
    util.promisify(fs.readFile)(filename, "utf-8");

  const createFile = (filename: string, data: string): Promise<void> =>
    util.promisify(fs.writeFile)(filename, data);

  try {
    const SignalConfig = JSON.parse(await readFile(process.argv[2]));
    const Parsed = new ConfigParser(SignalConfig).parser()

    await createFile("./out/index.html", Parsed.text)
    await createFile("./out/main.css", Parsed.css)
  } catch (error) {
    console.error(error);
  }
})();
