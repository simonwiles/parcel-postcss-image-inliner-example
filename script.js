import styles from "bundle-text:./styles.css";
const styleTag = document.createElement("style");
styleTag.textContent = styles;
document.head.appendChild(styleTag);

import leafletStyles from "bundle-text:leaflet/dist/leaflet.css";
const leafletStyleTag = document.createElement("style");
leafletStyleTag.textContent = leafletStyles;
document.head.appendChild(leafletStyleTag);

import leafletStylesRelativeImport from "bundle-text:./node_modules/leaflet/dist/leaflet.css";
const leafletStyleTag2 = document.createElement("style");
leafletStyleTag2.textContent = leafletStylesRelativeImport;
document.head.appendChild(leafletStyleTag2);
