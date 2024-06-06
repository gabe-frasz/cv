import { Font, renderToFile } from "@react-pdf/renderer";

import { uploadFile } from "./lib";
import { DevCV } from "./pdfs/DevCV";
import { __dirname, getDevCVData } from "./utils";

const cvPath = `${__dirname(
	import.meta.url,
)}/../generated/gabriel-vs-frasao-CV.pdf`;
const cvEnPath = `${__dirname(
	import.meta.url,
)}/../generated/gabriel-vs-frasao-CV-en.pdf`;

console.log("Fetching data from Notion...");

const [ptDict, enDict] = await Promise.all([
	getDevCVData("pt"),
	getDevCVData("en"),
]);

console.log("Generating files...");

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

await Promise.all([
	renderToFile(<DevCV dict={ptDict} />, cvPath),
	renderToFile(<DevCV dict={enDict} />, cvEnPath),
]);

console.log("Uploading to Drive...");

await Promise.all([
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvPath, process.env.DEV_CV_PT_ID!),
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvEnPath, process.env.DEV_CV_EN_ID!),
]);

console.log("Done!");
