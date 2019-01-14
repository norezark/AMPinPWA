/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "google.png",
    "revision": "8f9327db2597fa57d2f42b4a6c5a9855"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "5f14f57b7f965874c910193e2f7cc476"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "96577487b27caf7144eb044953ce3ddc"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "4acfa4d964e81bf7080f42c0561c2803"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "7c572c817ccf48c9065926f42cad876f"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8433d739f6b68f007851e47b710f0746"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "8433d739f6b68f007851e47b710f0746"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "5289c2f3ef78c697c9a937f804d6cf08"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "53da6c26e13a62f7216a329ca3540fee"
  },
  {
    "url": "index.html",
    "revision": "9d58c1cfdb94bfef258498811773e9c7"
  },
  {
    "url": "manifest.json",
    "revision": "f1fb637fad1c04aabdbfd933e3e08c05"
  },
  {
    "url": "sw.html",
    "revision": "757005b2793f4c15d02f3388c738a162"
  },
  {
    "url": "workbox-config.js",
    "revision": "9aa4e915f16c90e9e3f0ed5fcc73dbe3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/cdn.ampproject.org/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
