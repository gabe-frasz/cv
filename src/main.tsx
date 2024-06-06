import { Font } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./index.css";

Font.register({
	family: "GeistMono",
	fonts: [
		{
			src: "src/fonts/Geist.Mono/GeistMono-Regular.otf",
			fontWeight: "normal",
			fontStyle: "normal",
		},
		{
			src: "src/fonts/Geist.Mono/GeistMono-Bold.otf",
			fontWeight: "bold",
			fontStyle: "normal",
		},
	],
});

// biome-ignore lint/style/noNonNullAssertion: <root is defined in html>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
