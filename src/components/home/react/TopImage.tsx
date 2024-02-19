import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const imageWrapperStyle = tv({
	base: "w-full bg-black overflow-hidden relative min-h-screen",
});

const imageStyle = tv({
	base: "max-w-full w-full transition-all duration-[3000ms] scale-100 lg:block hidden h-screen min-h-screen",
	variants: {
		isRendered: {
			true: "scale-125 opacity-20",
			false: "",
		},
	},
});

export const TopImage = () => {
	const [isRendered, setIsRendered] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!isRendered) {
			setTimeout(() => setIsRendered(true), 100);
		}
	}, []);

	return (
		<div className={imageWrapperStyle()}>
			<div
				className="px-32 w-full absolute top-1/2 left-1/2 z-10"
				style={{ transform: "translate(-50%, -50%)" }}
			>
				<div className="w-full flex">
					<h1 className="text-white font-bold text-5xl">
						ようこそ折田研究室へ
					</h1>
				</div>
			</div>
			<img alt="" className={imageStyle({ isRendered })} src="/research.jpg" />
		</div>
	);
};
