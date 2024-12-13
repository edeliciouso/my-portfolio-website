function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light font-medium ml-1 duration-500">
				&copy; {new Date().getFullYear()}&nbsp;Edelyne Keisha. All Rights Reserved.
			</div>
		</div>
	);
}

export default AppFooterCopyright;
