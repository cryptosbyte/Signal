import fs from "fs";
import { exec } from "child_process";

type Type = "navbar" | "profile" | "profile-username" | "pofile";

interface ConfigBase {
  signal: {
    background: [
      "image" | "solid" | "file",
      string // File Location OR hex
    ];
    constant?: {
      type: Type;
      position?: "";
    }[];
    [key: string]: any;
  };
  styles: string;
}

export default class {
  config: ConfigBase;
  finalised_text: string = "";
  finalised_css: string = "";

  constructor(config: ConfigBase) {
    this.config = config;
  }

  public parser() {
    if (this.config.signal.background) {
      this.finalised_text += "<div class='root'>";
      this.finalised_css += `div.root { 
        ${
          this.config.signal.background[0] === "image"
            ? `background-image: "${new URL(
                this.config.signal.background[0]
              )}""`
            : this.config.signal.background[1].length === 6 &&
              !isNaN(Number(`0x${this.config.signal.background[1]}`))
            ? `background-color: #${this.config.signal.background[1]}`
            : this.config.signal.background[0] === "file"
            ? (() => {
                exec(
                  `mkdir out/ && cp ${this.config.signal.background[1]} out/`
                );
                return `background-image: "./${
                  this.config.signal.background[1].split("/").at(-1) ||
                  this.config.signal.background[1].split("\\").at(-1)
                }"`;
              })()
            : ""
        }\n}`;
    }
    this.finalised_text += "</div>";

    return {
      text: this.finalised_text,
      css: this.finalised_css,
    };
  }
}
