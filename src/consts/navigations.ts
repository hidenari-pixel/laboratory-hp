import {
	HOME_CONTACT_IMG,
	HOME_EVENT_IMG,
	HOME_MEMBER_IMG,
	HOME_QA_IMG,
	HOME_RESEARCH_IMG,
} from "./imagePaths";
import {
	ACCESS_PATH,
	EVENT_PATH,
	HOME_PATH,
	MEMBER_PATH,
	QA_PATH,
	RESEARCH_PATH,
} from "./paths";

export const NAVIGATIONS = [
	{ label: "ホーム", path: HOME_PATH },
	{ label: "メンバー", path: MEMBER_PATH },
	{ label: "イベント", path: EVENT_PATH },
	{ label: "研究", path: RESEARCH_PATH },
	{ label: "アクセス", path: ACCESS_PATH },
	{ label: "Q&A", path: QA_PATH },
];

export const NAVIGATIONS_WITH_IMAGE = [
	{
		title: "研究",
		body: "研究内容の紹介\n脊椎領域を中心にした研究を行っています",
		imgPath: HOME_RESEARCH_IMG,
		path: RESEARCH_PATH,
	},
	{
		title: "メンバー",
		body: "研究室のメンバーを紹介しています",
		imgPath: HOME_MEMBER_IMG,
		path: MEMBER_PATH,
	},
	{
		title: "イベント",
		body: "研究室関連イベントなどを掲載しています",
		imgPath: HOME_EVENT_IMG,
		path: EVENT_PATH,
	},
	{
		title: "アクセス",
		body: "研究室へのアクセスはこちら",
		imgPath: HOME_CONTACT_IMG,
		path: ACCESS_PATH,
	},
	{
		title: "Q&A",
		body: "よくある質問を掲載しています",
		imgPath: HOME_QA_IMG,
		path: QA_PATH,
	},
];
