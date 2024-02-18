import { NAVIGATIONS } from "@/consts/navigations";
import { useState } from "react";
import { tv } from "tailwind-variants";

const lineStyle = tv({
	base: "absolute w-1/2 border-b border-[#F5F5F7] opacity-80 transition-all duration-700",
	variants: {
		top: {
			true: "top-[13px]",
		},
		under: {
			true: "top-[19px]",
		},
		openTop: {
			true: "-rotate-45 top-4",
		},
		openUnder: {
			true: "rotate-45 top-4",
		},
	},
});

const navigationStyle = tv({
	base: "absolute top-10 left-0 transition-all duration-700 flex flex-col space-y-3 items-center w-screen bg-[#1d1d1f]",
	variants: {
		visible: {
			true: "pt-12 h-screen",
			false: "h-0",
		},
	},
});

const navigationItemStyle = tv({
	base: "transition-all duration-500 w-[80%] pb-3 text-lg",
	variants: {
		visible: {
			true: "border-b border-[#48484A] block opacity-80 hover:opacity-100 visible",
			false: "invisible opacity-0",
		},
		last: {
			true: "border-none",
		},
	},
});

export const BurgerNavigation = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute top-0 left-0 z-50 w-12 h-full flex justify-center items-center">
			<button
				onClick={() => setOpen(!open)}
				type="button"
				className="w-8 h-8 flex flex-col justify-center items-center relative"
			>
				<span className={lineStyle({ top: true, openTop: open })} />
				<span className={lineStyle({ under: true, openUnder: open })} />
			</button>
			<ul className={navigationStyle({ visible: open })}>
				{NAVIGATIONS.map(({ label, path }, i) => (
					<li
						key={path}
						className={navigationItemStyle({
							visible: open,
							last: i === NAVIGATIONS.length - 1,
						})}
					>
						<a href={path}>{label}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
