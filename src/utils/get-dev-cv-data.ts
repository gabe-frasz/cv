import { getBlockById, type BlockResponse } from "@/lib";
import type { Dictionary } from ".";

export async function getDevCVData(lang: "pt" | "en") {
	let res: BlockResponse[];

	if (lang === "pt") {
		res = await Promise.all(blocksIdPt.map(getBlockById));
	} else {
		res = await Promise.all(blocksIdEn.map(getBlockById));
	}

	const header = res[0];
	const contacts = res[1];
	const objective = res[2];
	const qualifications = res[3];
	const [experienceTitle, ...experienceRest] = res[4];
	const [academicsTitle, ...academicsRest] = res[5];
	const [technologiesTitle, ...technologies] = res[6];
	const [languagesTitle, ...languagesRest] = res[7];
	const [coursesTitle, ...coursesRest] = res[8];
	const [projectsTitle, ...projectsRest] = res[9];

	const experienceContent = await Promise.all(
		experienceRest.map((item) => {
			return getBlockById(item.id);
		}),
	);
	const academicsContent = await Promise.all(
		academicsRest.map((item) => {
			return getBlockById(item.id);
		}),
	);
	const languagesContent = await Promise.all(
		languagesRest.map((item) => {
			return getBlockById(item.id);
		}),
	);
	const coursesContent = await Promise.all(
		coursesRest.map((item) => {
			return getBlockById(item.id);
		}),
	);
	const projectsContent = await Promise.all(
		projectsRest.map((item) => {
			return getBlockById(item.id);
		}),
	);

	return {
		header: {
			name: header[0].paragraph.rich_text[0].plain_text,
			title: header[1].paragraph.rich_text[0].plain_text,
		},
		contacts: {
			phone: contacts[0].paragraph.rich_text[0].plain_text,
			email: {
				text: contacts[1].paragraph.rich_text[0].plain_text,
				link: contacts[1].paragraph.rich_text[0].href,
			},
			linkedin: {
				text: contacts[2].paragraph.rich_text[0].plain_text,
				link: contacts[2].paragraph.rich_text[0].href,
			},
			github: {
				text: contacts[3].paragraph.rich_text[0].plain_text,
				link: contacts[3].paragraph.rich_text[0].href,
			},
		},
		body: {
			objective: {
				title: objective[0].paragraph.rich_text[0].plain_text,
				content: objective[1].paragraph.rich_text[0].plain_text,
			},
			qualifications: {
				title: qualifications[0].paragraph.rich_text[0].plain_text,
				content: qualifications[1].paragraph.rich_text[0].plain_text,
			},
			experience: {
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				title: experienceTitle!.paragraph.rich_text[0].plain_text,
				content: experienceContent.map((item) => ({
					date: item[0].numbered_list_item.rich_text[0].plain_text,
					company: item[1].numbered_list_item.rich_text[0].plain_text,
					link: {
						text: item[2].numbered_list_item.rich_text[0].plain_text,
						src: item[2].numbered_list_item.rich_text[0].href,
					},
					companyDescription:
						item[3].numbered_list_item.rich_text[0].plain_text,
					jobTitle: item[4].numbered_list_item.rich_text[0].plain_text,
					jobDescription: item[5].numbered_list_item.rich_text[0].plain_text,
				})),
			},
			academics: {
				title: academicsTitle.paragraph.rich_text[0].plain_text,
				content: academicsContent.map((item) => ({
					date: item[0].numbered_list_item.rich_text[0].plain_text,
					course: item[1].numbered_list_item.rich_text[0].plain_text,
					university: item[2].numbered_list_item.rich_text[0].plain_text,
				})),
			},
			technologies: {
				title: technologiesTitle.paragraph.rich_text[0].plain_text,
				content: technologies.map(
					(tech) => tech.bulleted_list_item.rich_text[0].plain_text,
				),
			},
			languages: {
				title: languagesTitle.paragraph.rich_text[0].plain_text,
				content: languagesContent.map((item) => ({
					language: item[0].numbered_list_item.rich_text[0].plain_text,
					level: item[1].numbered_list_item.rich_text[0].plain_text,
					school: item[2].numbered_list_item.rich_text[0]?.plain_text ?? "",
				})),
			},
			courses: {
				title: coursesTitle.paragraph.rich_text[0].plain_text,
				content: coursesContent.map((item) => ({
					date: item[0].numbered_list_item.rich_text[0].plain_text,
					name: item[1].numbered_list_item.rich_text[0].plain_text,
					school: item[2].numbered_list_item.rich_text[0].plain_text,
				})),
			},
			projects: {
				title: projectsTitle.paragraph.rich_text[0].plain_text,
				content: projectsContent.map((item) => ({
					date: item[0].numbered_list_item.rich_text[0].plain_text,
					link: {
						text: item[1].numbered_list_item.rich_text[0].plain_text,
						src: item[1].numbered_list_item.rich_text[0].href,
					},
					description: item[2].numbered_list_item.rich_text[0].plain_text,
				})),
			},
		},
	} satisfies Dictionary;
}

const blocksIdPt = [
	// Title
	"c0698f370bcf4fc9adfcb9ca32cb6e68",
	// Contacts
	"6f0d89ee87d74647a6bc57947deac561",
	// Objective
	"aa6f0b950bad425f8338e27153ff5810",
	// Qualifications
	"a83f7a8852c44029b2535a0e01176d6a",
	// Experience
	"d9d7cae8919141b492926d96b9862bc4",
	// Academics
	"de11576467bf4840808effc0fb307437",
	// Techonologies
	"8cf452bd7cc64e2c8cec4366561f1067",
	// Languages
	"a156cd64d2b345d19f246b9460d1fb42",
	// Courses
	"1128eb72178143a5935e853b43d7aec5",
	// Projects
	"1f1578fcfc624efd88e830f9c9d1a9af",
];

const blocksIdEn = [
	// Title
	"a14bce74a0f443aabd5010cdc7dc8639",
	// Contacts
	"346f70700c554dd095abfbe155b76ab4",
	// Objective
	"add5b9b0c70f4bf184fb5400b024bb23",
	// Qualifications
	"c2db11ede04645809fa7d03017afa150",
	// Experience
	"c4954ff1d59e412685ab211811de6be7",
	// Academics
	"f0340c48ac0d47a78a38b842b9d78c8d",
	// Techonologies
	"a0e7ccce71094b7d89cbc413cc497556",
	// Languages
	"c8b3e47f7a964e7e9de4253e52ea4c44",
	// Courses
	"2366cae312b04fa7a5e913ac9112e2e8",
	// Projects
	"9ae2b6e1750e4bc6b2fea887f9c9c27e",
];
