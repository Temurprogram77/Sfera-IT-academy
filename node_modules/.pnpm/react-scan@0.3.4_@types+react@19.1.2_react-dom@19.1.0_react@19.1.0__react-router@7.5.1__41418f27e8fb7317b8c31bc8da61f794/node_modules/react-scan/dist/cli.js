'use client';
/**
 * Copyright 2025 Aiden Bai, Million Software, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the “Software”), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.mts
var import_node_child_process = require("child_process");
var import_promises = __toESM(require("fs/promises"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_prompts = require("@clack/prompts");
var import_kleur = require("kleur");
var import_mri = __toESM(require("mri"), 1);
var import_playwright = require("playwright");
var truncateString = (str, maxLength) => {
  let result = str.replace("http://", "").replace("https://", "").replace("www.", "");
  if (result.endsWith("/")) {
    result = result.slice(0, -1);
  }
  if (result.length > maxLength) {
    const half = Math.floor(maxLength / 2);
    const start = result.slice(0, half);
    const end = result.slice(result.length - (maxLength - half));
    return `${start}\u2026${end}`;
  }
  return result;
};
var inferValidURL = (maybeURL) => {
  try {
    return new URL(maybeURL).href;
  } catch {
    try {
      return new URL(`https://${maybeURL}`).href;
    } catch {
      return "about:blank";
    }
  }
};
var getBrowserDetails = async (browserType) => {
  switch (browserType) {
    case "firefox":
      return { browserType: import_playwright.firefox, channel: void 0, name: "firefox" };
    case "webkit":
      return { browserType: import_playwright.webkit, channel: void 0, name: "webkit" };
    default:
      return { browserType: import_playwright.chromium, channel: "chrome", name: "chrome" };
  }
};
var userAgentStrings = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
];
var applyStealthScripts = async (context) => {
  await context.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => void 0
    });
    Object.defineProperty(navigator, "languages", {
      get: () => ["en-US", "en"]
    });
    Object.defineProperty(navigator, "plugins", {
      get: () => [1, 2, 3, 4, 5]
    });
    const win = window;
    win.__playwright = void 0;
    win.__pw_manual = void 0;
    win.__PW_inspect = void 0;
    Object.defineProperty(navigator, "headless", {
      get: () => false
    });
    const originalQuery = window.navigator.permissions.query;
    window.navigator.permissions.query = (parameters) => parameters.name === "notifications" ? Promise.resolve({
      state: Notification.permission
    }) : originalQuery(parameters);
  });
};
var init = async () => {
  (0, import_prompts.intro)(`${(0, import_kleur.bgMagenta)("[\xB7]")} React Scan`);
  const args = (0, import_mri.default)(process.argv.slice(2));
  let browser;
  const device = import_playwright.devices[args.device];
  const { browserType, channel } = await getBrowserDetails(args.browser);
  const contextOptions = {
    headless: false,
    channel,
    ...device,
    acceptDownloads: true,
    viewport: null,
    locale: "en-US",
    timezoneId: "America/New_York",
    args: [
      "--enable-webgl",
      "--use-gl=swiftshader",
      "--enable-accelerated-2d-canvas",
      "--disable-blink-features=AutomationControlled",
      "--disable-web-security"
    ],
    userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
    bypassCSP: true,
    ignoreHTTPSErrors: true
  };
  try {
    browser = await browserType.launch({
      headless: false,
      channel
    });
  } catch {
  }
  if (!browser) {
    try {
      browser = await browserType.launch({ headless: false });
    } catch {
      const installPromise = new Promise((resolve, reject) => {
        const runInstall = () => {
          (0, import_prompts.confirm)({
            message: "No drivers found. Install Playwright Chromium driver to continue?"
          }).then((shouldInstall) => {
            if ((0, import_prompts.isCancel)(shouldInstall)) {
              (0, import_prompts.cancel)("Operation cancelled.");
              process.exit(0);
            }
            if (!shouldInstall) {
              process.exit(0);
            }
            const installProcess = (0, import_node_child_process.spawn)(
              "npx",
              ["playwright@latest", "install", "chromium"],
              { stdio: "inherit" }
            );
            installProcess.on("close", (code) => {
              if (!code) resolve();
              else
                reject(
                  new Error(`Installation process exited with code ${code}`)
                );
            });
            installProcess.on("error", reject);
          });
        };
        runInstall();
      });
      await installPromise;
      try {
        browser = await import_playwright.chromium.launch({ headless: false });
      } catch {
        (0, import_prompts.cancel)(
          "No browser could be launched. Please run `npx playwright install` to install browser drivers."
        );
      }
    }
  }
  if (!browser) {
    (0, import_prompts.cancel)(
      "No browser could be launched. Please run `npx playwright install` to install browser drivers."
    );
    return;
  }
  const context = await browser.newContext(contextOptions);
  await applyStealthScripts(context);
  const scriptContent = await import_promises.default.readFile(
    import_node_path.default.resolve(__dirname, "./auto.global.js"),
    "utf8"
  );
  await context.addInitScript({
    content: `window.hideIntro = true;${scriptContent}
//# sourceURL=react-scan.js`
  });
  const page = await context.newPage();
  const inputUrl = args._[0] || "about:blank";
  const urlString = inferValidURL(inputUrl);
  await page.goto(urlString);
  await page.waitForLoadState("load");
  await page.waitForTimeout(500);
  const pollReport = async () => {
    if (page.url() !== currentURL) return;
    await page.evaluate(() => {
      const globalHook = globalThis.__REACT_SCAN__;
      if (!globalHook) return;
      let count2 = 0;
      globalHook.ReactScanInternals.onRender = (_fiber, renders) => {
        let localCount = 0;
        for (const render of renders) {
          localCount += render.count;
        }
        count2 = localCount;
      };
      const reportData = globalHook.ReactScanInternals.Store.reportData;
      if (!Object.keys(reportData).length) return;
      console.log("REACT_SCAN_REPORT", count2);
    });
  };
  let count = 0;
  let currentSpinner;
  let currentURL = urlString;
  let interval;
  const inject = async (url) => {
    if (interval) clearInterval(interval);
    currentURL = url;
    const truncatedURL = truncateString(url, 35);
    console.log((0, import_kleur.dim)(`Scanning: ${truncatedURL}`));
    count = 0;
    try {
      await page.waitForLoadState("load");
      await page.waitForTimeout(500);
      const hasReactScan = await page.evaluate(() => {
        return Boolean(globalThis.__REACT_SCAN__);
      });
      if (!hasReactScan) {
        await page.reload();
        return;
      }
      await page.waitForTimeout(100);
      interval = setInterval(() => {
        pollReport().catch(() => {
        });
      }, 1e3);
    } catch {
      console.log((0, import_kleur.red)(`Error: ${truncatedURL}`));
    }
  };
  await inject(urlString);
  page.on("framenavigated", async (frame) => {
    if (frame !== page.mainFrame()) return;
    const url = frame.url();
    inject(url);
  });
  page.on("console", async (msg) => {
    const text = msg.text();
    if (!text.startsWith("REACT_SCAN_REPORT")) {
      return;
    }
    const reportDataString = text.replace("REACT_SCAN_REPORT", "").trim();
    try {
      count = Number.parseInt(reportDataString, 10);
    } catch {
      return;
    }
    const truncatedURL = truncateString(currentURL, 50);
    if (currentSpinner) {
      currentSpinner.message(
        (0, import_kleur.dim)(`Scanning: ${truncatedURL}${count ? ` (\xD7${count})` : ""}`)
      );
    }
  });
};
void init();
