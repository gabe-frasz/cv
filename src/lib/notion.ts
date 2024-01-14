import { Client } from "@notionhq/client";

export type BlockResponse = {
	id: string;
	heading_1: { rich_text: { plain_text: string; href: string }[] };
	paragraph: { rich_text: { plain_text: string; href: string }[] };
	list: { rich_text: { plain_text: string; href: string }[] };
	numbered_list_item: { rich_text: { plain_text: string; href: string }[] };
	bulleted_list_item: { rich_text: { plain_text: string; href: string }[] };
}[];

export const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getBlockById = async (id: string) => {
	const response = await notion.blocks.children.list({ block_id: id });
	return response.results as unknown as BlockResponse;
};
