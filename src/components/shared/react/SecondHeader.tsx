import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

type Props = {
	title: string;
	pageSize?: number;
	currentPage?: number;
	url?: { current: string; next?: string; prev?: string };
};

const secondHeaderStyle = tv({
	base: "w-full h-12 bg-[#1d1d1fb8] backdrop-blur",
	variants: {
		isFixed: {
			true: "fixed top-0 left-0",
			false: "",
		},
	},
});

export const SecondHeader = ({ title, currentPage, pageSize, url }: Props) => {
	const isFixed = useScroll();

	return (
		<div className="md:pb-8 w-full">
			{isFixed && <div className="pt-12" />}
			<div className={secondHeaderStyle({ isFixed })}>
				<div className="lg:w-[1024px] lg:px-0 px-4 h-full flex justify-between items-center mx-auto">
					<h2 className="text-lg text-gray-100 font-semibold">{title}</h2>
					{currentPage && pageSize && url && (
						<div className="flex items-center gap-x-4 text-white text-sm">
							{url.prev ? (
								<a
									className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#1d1d1f]/5"
									href={url.prev}
								>
									&lt;
								</a>
							) : (
								<span className="w-6" />
							)}
							<div className="flex items-end space-x-1">
								<span>{currentPage}</span>
								<span className="text-xs opacity-50">/</span>
								<span className="text-xs opacity-50">{pageSize}</span>
							</div>
							{url.next ? (
								<a
									className="h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#1d1d1f]/5"
									href={url.next}
								>
									&gt;
								</a>
							) : (
								<span className="w-6" />
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const useScroll = () => {
	const [isFixed, setIsFixed] = useState(false);

	const onScrollListner = () => {
		if (window.scrollY >= 48) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("scroll", onScrollListner);

		return () => {
			window.removeEventListener("scroll", onScrollListner);
		};
	}, []);

	return isFixed;
};
