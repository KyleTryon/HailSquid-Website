import "./style.css";
import bgImg from "./techsquidtv-bg.webp";

const body = document.querySelector("body") as HTMLBodyElement;
body.style.backgroundImage = `linear-gradient(175deg, rgba(88,28,135,1) 0%, rgba(76,29,149,0.9) 50%, rgba(49,46,129,0.99) 100%),
    url(${bgImg})`;

const linkList = document.querySelector("#app-list")!;

const linkTextClass = "w-full";
const linkItemClass =
  "w-full rounded-full py-2 px-4 my-4 border text-xl hover:bg-stone-200 hover:text-purple-900 hover:cursor-pointer transition-colors duration-200";
const linkAnchorClass =
  "flex flex-row text-center text-2xl hover:text-purple-900";
const iconClass = "mr-4 fill-current w-8";
type Link = {
  text: string;
  url: string;
  icon: string;
};

const links: Link[] = [
  {
    text: "Etsy Store",
    url: "https://www.etsy.com/shop/hailsquid/",
    icon: `<svg class="${iconClass}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Etsy</title><path d="M8.559 2.445c0-.325.033-.52.59-.52h7.465c1.3 0 2.02 1.11 2.54 3.193l.42 1.666h1.27c.23-4.728.43-6.784.43-6.784s-3.196.36-5.09.36H6.635L1.521.196v1.37l1.725.326c1.21.24 1.5.496 1.6 1.606 0 0 .11 3.27.11 8.64 0 5.385-.09 8.61-.09 8.61 0 .973-.39 1.333-1.59 1.573l-1.722.33V24l5.13-.165h8.55c1.935 0 6.39.165 6.39.165.105-1.17.75-6.48.855-7.064h-1.2l-1.284 2.91c-1.005 2.28-2.476 2.445-4.11 2.445h-4.906c-1.63 0-2.415-.64-2.415-2.05V12.8s3.62 0 4.79.096c.912.064 1.463.325 1.76 1.598l.39 1.695h1.41l-.09-4.278.192-4.305h-1.391l-.45 1.89c-.283 1.244-.48 1.47-1.754 1.6-1.666.17-4.815.14-4.815.14V2.45h-.05z"/></svg>`,
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/hailsquid/",
    icon: `<svg class="${iconClass}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>`,
  },
  {
    text: "Twitter",
    url: "https://twitter.com/hailsquid",
    icon: `<svg class="${iconClass}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
  },
  {
    text: "Mastodon",
    url: "https://fosstodon.org/@techsquidtv",
    icon: `<svg class="${iconClass}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>`,
  },
  {
    text: "TechSquidTV",
    url: "https://techsquidtv.com/about",
    icon: `<svg class="${iconClass}" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="body" x="0" y="0" version="1.1" viewBox="0 0 1952.5 1255.4"><path d="m290.1 267.3-.3-1.5c-.5-2.1-1.4-4.7-3.8-7.6 17.2-33.4 11.6-69.9-14.6-92.1-8.9-7.5-19-12.4-29.5-14.2 23-13.8 46.8-26.2 71.8-39.2s50.7-26.3 76-41.5c.4 1.2.8 2.5 1.1 3.7l2.3 9L401 79c10.1-6.2 20.7-9.5 30.6-9.5 15.8 0 28.4 8.1 36.5 23.5 15.4 29.3-.8 56.6-23.7 70.6l-6.9 4.2 5.4 6.1c1 1.1 2 2.4 2.8 3.6-26.9 16.7-51.5 34.2-75.4 51.2-22.8 16.2-44.3 31.5-66.7 45.4l-13.5-6.8z" class="st0"/><path d="M175.8 409.3c-2.1-31.8-20.5-56.6-48.9-64.1-5.3-1.4-10.9-2.2-16.4-2.2-12.9 0-25.1 4.3-35.7 12.6l-6.4-23c16.7-22.9 34.7-44.5 53.7-67.4 18.5-22.3 37.7-45.3 55.7-69.8.7.9 1.4 1.8 2 2.6l5.5 7.7 5.6-7.7c11.6-15.9 26.6-25.1 41.2-25.1 9 0 17.7 3.4 25.6 10.1 24.5 20.7 19.1 52.7 2.8 75.1l-4.8 6.6 7.4 3.5c1.2.6 2.5 1.3 3.6 2-19 26.5-35.6 52.9-51.7 78.5-13.2 21.2-25.8 41.3-39.2 60.6z" class="st0"/><path d="M124.7 623.1C112.2 599 91.4 584.8 68 584.8c-6.4 0-12.8 1-18.9 2.9-11 3.3-20.8 9.5-28.4 17.9l-.4-.1-14.5-17.9c6.5-28.3 14.7-56.1 23.3-85.4 8.4-28.7 17.1-58.3 24.2-88.7.9.5 1.9 1 2.8 1.5l8 4.6 2-9c3.1-13.6 8.8-25 16.7-33.1 7.8-8 17.3-12.2 27.6-12.2 3.6 0 7.3.5 11.1 1.5 30 7.9 37.1 39.4 30.8 67l-1.9 8.4h8.6c1.2 0 2.5.1 3.6.1-7.1 32.5-12.2 63.9-17.1 94.3-4.7 29.3-9.2 56.9-15.2 84.3l-5.6 2.2z" class="st0"/><path d="M55.8 863.2c-7.3-28-13-56.4-18.9-86.4-5.9-29.6-12-60.2-19.9-90.6 1.2-.1 2.5-.3 3.6-.3l8.6-.3-2.2-8.3c-7.3-27.4-1.3-59.1 28.4-68.3 4.3-1.3 8.6-2 12.7-2 20.2 0 37.2 16.6 44.3 43.4l2.4 9 7.9-4.9c.9-.5 1.8-1.1 2.7-1.6 8.7 31.8 18.6 61.6 28.3 90.4 9.4 28 18.2 54.5 25.5 81.5l-6.1 8.2c-1.3.3-2.8.9-4.4 1.9-13.8-12.3-29.9-19-45.7-19-15.1 0-29.5 6-41.6 17.4-9.6 9-16.3 20-19.6 32.2l-6-2.3z" class="st0"/><path d="M195 1080c-17.5-22-33.7-45.1-50.8-69.5-17-24.2-34.5-49.2-53.5-73.2 1.1-.8 2.4-1.6 3.6-2.2l7.1-3.9-5.1-6.4c-17.3-21.6-24.2-53.2-.7-75.2 8.2-7.7 17.3-11.6 27.1-11.6 14 0 28.7 8.3 40.3 22.8l5.9 7.4 5.1-7.9c.6-.9 1.3-1.9 1.9-2.8 20.2 24.8 40.8 47.1 60.7 68.8 19.4 21.1 37.7 41 54.9 62.1l-3.7 16.3c-2.9-.4-5.8-.6-8.7-.6-26.1 0-47.4 14.5-58.4 39.8-4.7 10.6-6.8 22.2-6.1 33.8L195 1080z" class="st0"/><path d="M417.4 1220c-24.2-12.4-47.6-26.4-72.3-41.2-24.5-14.7-49.8-29.8-76.1-43.4.8-1.2 1.7-2.6 2.6-3.8l4.9-6.5-7.3-3.7c-23.8-12-41.8-37.9-28.6-68.4 7.5-17.2 21.2-26.7 38.6-26.7 8.7 0 18.2 2.4 27.3 7.1l8.2 4.1 1.6-9c.2-1.3.5-2.6.9-3.8 27.8 13.8 55 25.2 81.3 36.3 25.5 10.7 49.7 20.9 73.2 32.7l3.2 19.3c-33.3 9.1-54 37.4-52.1 72.3.4 9.4 2.7 18.8 6.7 27.3l-12.1 7.4z" class="st0"/><path d="M505.9 1241.4c.1-1.4.3-3 .6-4.4l1.5-8.5-8.7.6c-1.5.1-3.1.2-4.6.2-13.8 0-25.8-4-34.8-11.6-9.3-7.9-14.7-19.5-15.5-33.5-.8-14.7 3.7-27.4 13-36.7 8.9-8.8 21.8-14.2 36.6-15.2l8.5-.6-2.4-8.2c-.4-1.4-.8-3-1.1-4.4 30.7-2.2 59.8-6.3 88-10.2 27.1-3.7 52.7-7.3 78.5-9.1l1.3 1.8-.5 5.5c-.2 1.9-.7 7.1 3.9 13-7.2 13.2-10.9 27.1-10.9 40.7 0 20.4 8.1 38.4 23.6 52.1.5.5 1.1.9 1.6 1.3l.3 4.8-11.5 20.2c-19.6 1.2-38.9 1.3-53.8 1.3-9.3 0-18.7-.1-27.9-.1-9.3-.1-19-.1-28.6-.1-15.7-.3-36-.1-57.1 1.1zM1649 274.1c-22.4-13.9-44-29.2-66.8-45.5-23.8-17-48.5-34.5-75.3-51.1.8-1.2 1.9-2.5 2.8-3.6l5.4-6.1-6.9-4.2c-22.9-14-39.1-41.2-23.7-70.6 8-15.4 20.7-23.5 36.5-23.5 9.9 0 20.4 3.3 30.5 9.5l7.9 4.8 2.3-9c.3-1.2.7-2.5 1.1-3.7 25.3 15.1 51.1 28.5 76 41.5 25 13 48.7 25.3 71.8 39.1-10.5 1.9-20.6 6.7-29.5 14.2-26.3 22.2-31.8 58.7-14.6 92.1-2.4 2.9-3.3 5.4-3.8 7.5-.1.5-.2 1-.3 1.6l-13.4 7z" class="st0"/><path d="M1776.7 409.3c-13.4-19.3-26.1-39.5-39.4-60.6-16-25.5-32.6-51.8-51.5-78.3 1.1-.7 2.5-1.4 3.6-2l7.4-3.5-4.8-6.6c-16.3-22.5-21.8-54.4 2.8-75.2 8-6.7 16.6-10.1 25.6-10.1 14.6 0 29.7 9.1 41.2 25.1l5.6 7.7 5.5-7.7c.6-.9 1.3-1.8 2-2.6 18 24.4 37.1 47.4 55.7 69.8 19 22.9 37 44.5 53.7 67.3l-6.4 23c-10.6-8.2-22.8-12.6-35.7-12.6-5.6 0-11.1.8-16.5 2.2-28.4 7.5-46.7 32.3-48.8 64.1z" class="st0"/><path d="M1822.2 620.7c-6-27.3-10.5-55.1-15.2-84.3-4.9-30.4-9.9-61.7-17.1-94.2 1.1-.1 2.3-.1 3.5-.1h8.6l-1.8-8.4c-6.3-27.7.8-59.1 30.8-67 3.8-1 7.5-1.5 11.1-1.5 21 0 38 17.3 44.3 45.3l2 9 8-4.6c.9-.5 1.9-1 2.8-1.5 7.1 30.4 15.8 59.9 24.2 88.6 8.6 29.4 16.8 57.2 23.3 85.5l-14.5 17.9-.4.1c-7.7-8.4-17.4-14.6-28.4-17.9-6.1-1.9-12.4-2.9-18.8-2.9-23.4 0-44.2 14.2-56.8 38.3l-5.6-2.3z" class="st0"/><path d="M1891 865.4c-3.3-12.2-9.9-23-19.6-32.1-12.1-11.4-26.5-17.4-41.6-17.4-15.8 0-31.8 6.7-45.7 19-1.6-1-3.1-1.5-4.4-1.9l-6.1-8.2c7.3-27 16.2-53.5 25.5-81.5 9.6-28.8 19.6-58.6 28.3-90.4.9.5 1.9 1 2.8 1.6l7.9 4.9 2.4-8.9c7.1-26.7 24.1-43.4 44.3-43.4 4.1 0 8.4.7 12.7 2 29.7 9.2 35.6 40.9 28.4 68.3l-2.2 8.3 8.6.3c1.2 0 2.4.2 3.6.3-7.9 30.4-13.9 61-19.9 90.6-6 30-11.7 58.4-18.9 86.4l-6.1 2.1z" class="st0"/><path d="M1737.7 1077.8c.7-11.6-1.4-23.2-6.1-33.9-11-25.2-32.2-39.7-58.3-39.7-2.9 0-5.8.2-8.7.6l-3.7-16.3c17.2-21.1 35.5-41.1 54.9-62.2 19.9-21.6 40.5-44 60.7-68.7.7.9 1.4 1.9 1.9 2.8l5.1 7.9 5.9-7.4c11.7-14.5 26.4-22.8 40.3-22.8 9.8 0 18.9 3.9 27.1 11.6 23.5 22 16.6 53.7-.7 75.2l-5.1 6.4 7.2 3.9c1.2.7 2.5 1.5 3.6 2.2-19 24-36.5 48.9-53.4 73.1-17.1 24.4-33.3 47.5-50.8 69.5l-19.9-2.2z" class="st0"/><path d="M1522.9 1212.5c4-8.6 6.3-17.9 6.7-27.3 1.9-34.9-18.8-63.1-52.1-72.3l3.1-19.2c23.5-11.8 47.7-21.9 73.2-32.7 26.3-11.1 53.5-22.5 81.3-36.3.3 1.3.6 2.6.9 3.8l1.6 9 8.2-4.1c9.1-4.6 18.6-7.1 27.3-7.1 17.4 0 31.1 9.5 38.6 26.7 5.8 13.4 6 27 .4 39.5-5.3 11.8-15.6 22.1-29 28.9l-7.3 3.7 4.9 6.5c.9 1.2 1.8 2.6 2.6 3.8-26.3 13.6-51.7 28.7-76.2 43.4-24.7 14.8-48.1 28.7-72.2 41.2l-12-7.5z" class="st0"/><path d="M1446.6 1241.4c-21.2-1.2-41.4-1.3-57-1.3-9.6 0-19.2.1-28.5.1-9.2.1-18.6.1-27.9.1-14.9 0-34.2-.2-53.9-1.3l-11.5-20.2.3-4.7c.5-.4 1.1-.8 1.6-1.3 15.4-13.6 23.6-31.6 23.6-52.1 0-13.6-3.8-27.5-10.9-40.7 4.6-5.9 4.1-11.1 3.9-13l-.5-5.5 1.3-1.8c25.7 1.8 51.4 5.4 78.4 9.1 28.2 3.9 57.3 7.9 88 10.2-.3 1.4-.7 3-1.1 4.4l-2.4 8.2 8.5.6c14.7 1 27.7 6.3 36.5 15.2 9.3 9.3 13.8 22 13 36.7-.8 13.9-6.1 25.5-15.4 33.5-8.9 7.6-21 11.6-34.8 11.6-1.5 0-3.1-.1-4.6-.2l-8.7-.6 1.5 8.6c.3 1.4.4 2.9.6 4.4zM958.2 828c-42.3 0-76.6 34.3-76.6 76.6s34.3 76.6 76.6 76.6c-.1-23.4 18.8-42.5 42.3-42.6 8 0 15.9 2.2 22.7 6.5 22.4-35.8 11.5-83-24.3-105.4-12.3-7.7-26.4-11.8-40.7-11.7z" class="st0"/><path d="M1262.4 1116.6s9.5-4.9 9.2-8.1c-4.5-47.5-7.5-82.3-12.2-110.1 9.1-29.5 13.8-60.1 13.7-91 0-85.6-78.5-300.4-156-491.6l79.3 185.2s73.9-49.7 76.6-76.6c13.6-137.5-306.4-459.7-306.4-459.7S646.5 386.9 660.2 524.4c2.7 27 76.6 76.6 76.6 76.6l79.3-185.2c-77.4 191.3-155.9 406-155.9 491.7 0 44.1 9.5 87.7 27.9 127.7-2.3 20.7-4.5 44.7-7.2 73.3-.3 3.2 9.2 8.1 9.2 8.1-20.7 27.3-23 62.1 2.3 84.4s56.4 12.9 77.1-14.4c0 0 6.2 8.2 9.2 8.1 22.9-1.1 48.4-1.1 73.3-3.1 75 30.2 158.8 29.7 233.4-1.5 29.6 3.6 61 3.4 88.6 4.6 3 .1 9.2-8.1 9.2-8.1 20.7 27.3 51.8 36.7 77.1 14.4s22.8-57.1 2.1-84.4zm-304.2-58.8c-19.2 0-38.2-3.6-56.1-10.6l-.1-.1c-40.3-16-72-48.3-87.2-88.9l-.3-.2c-6.3-17.1-9.6-35.1-9.6-53.3 0-84.6 68.6-153.2 153.2-153.2s153.2 68.6 153.2 153.2-68.5 153.1-153.1 153.1z" class="st0"/></svg>`,
  },
];

links.forEach((link) => {
  const listItem = document.createElement("li");
  listItem.className = linkItemClass;
  const anchor = document.createElement("a");
  anchor.className = linkAnchorClass;
  anchor.href = link.url;
  anchor.innerHTML = link.icon;
  const text = document.createElement("span");
  text.innerText = link.text;
  text.className = linkTextClass;
  anchor.appendChild(text);
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  listItem.appendChild(anchor);
  linkList.appendChild(listItem);
});
