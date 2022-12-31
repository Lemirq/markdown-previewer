import React from 'react';
import ReactMarkdown from 'https://esm.sh/react-markdown@7';
import remarkGfm from 'remark-gfm';

const Reader = ({ Markdown }) => {
	return (
		<div
			className="lg:w-1/2 w-full h-full max-w-none prose dark:prose-invert dark:bg-slate-900 overflow-y-scroll px-4 pt-5 scrollbar-hide"
			id="preview"
		>
			<ReactMarkdown children={Markdown} remarkPlugins={[remarkGfm]} />
		</div>
	);
};

export default Reader;
