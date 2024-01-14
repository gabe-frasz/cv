import { Document, renderToFile } from "@react-pdf/renderer";

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

await Promise.all([
	renderToFile(
		<Document>
			<DevCV dict={ptDict} />
		</Document>,
		cvPath,
	),
	renderToFile(
		<Document>
			<DevCV dict={enDict} />
		</Document>,
		cvEnPath,
	),
]);

console.log("Uploading to Drive...");

await Promise.all([
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvPath, process.env.DEV_CV_PT_ID!),
	// biome-ignore lint/style/noNonNullAssertion: <refactor later>
	uploadFile(cvEnPath, process.env.DEV_CV_EN_ID!),
]);

console.log("Done!");
