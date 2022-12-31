import React from 'react';

const Writer = ({ setMarkdown, Markdown }) => {
	return (
		<div className="lg:w-1/2 w-full h-full pl-3 dark:bg-slate-900 bg-white text-black dark:text-white">
			<textarea
				id="editor"
				value={Markdown}
				onChange={(e) => setMarkdown(e.target.value)}
				className="h-full text-lg pt-5 lg:border-r-2 lg:border-b-0 border-b-2 dark:border-slate-700 border-zinc-300 w-full outline-none resize-none scrollbar-hide dark:bg-slate-900 bg-white text-black dark:text-white"
			/>
		</div>
	);
};

export default Writer;
