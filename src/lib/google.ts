import { google } from "googleapis";

import { createReadStream } from "node:fs";
import { basename } from "node:path";

import { __dirname } from "@/utils";

export async function uploadFile(path: string, fileId: string) {
	const auth = new google.auth.GoogleAuth({
		keyFile: `${__dirname(import.meta.url)}/../../api-keys.json`,
		scopes: ["https://www.googleapis.com/auth/drive"],
	});
	const drive = google.drive({ version: "v3", auth });

	await drive.files.update({
		media: {
			body: createReadStream(path),
			mimeType: "application/pdf",
		},
		requestBody: {
			name: basename(path),
		},
		fileId,
		addParents: process.env.DRIVE_FOLDER_ID,
	});
}
