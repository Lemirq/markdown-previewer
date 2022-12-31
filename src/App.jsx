import React, { useState, useEffect } from 'react';
import Writer from './Writer';
import Reader from './Reader';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
function App() {
	const [Theme, setTheme] = useState(false);
	const [Markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://lemirq.github.io), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://lemirq.github.io/assets/Images/logo-black.png)`);

	useEffect(() => {
		const theme = window.localStorage.getItem('theme');
		if (theme === 'true') {
			setTheme(true);
		}
	}, []);
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		setTheme(event.matches ? true : false);
	});

	useEffect(() => {
		window.localStorage.setItem('theme', Theme);
	}, [Theme]);

	const opposite = () => {
		setTheme(!Theme);
	};

	return (
		<div className={Theme ? 'dark' : 'light'}>
			<div className="w-screen h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
				<div className="fixed top-0 w-screen lg:text-2xl text-black dark:bg-slate-900 border-b-2 dark:border-slate-700 border-zinc-300 dark:text-white py-3 flex justify-between items-center px-10">
					<div>
						Live Markdown Preview{' '}
						<span className="lg:text-base text-sm">
							<a href="https://lemirq.github.io">by Vihaan</a>
						</span>
					</div>
					<div>
						<button onClick={opposite} className="rounded-full dark:bg-slate-90 p-2 text-xl">
							{Theme ? <BsFillSunFill /> : <BsFillMoonFill />}
						</button>
					</div>
				</div>
				<div className="w-screen h-screen flex justify-center items-center lg:flex-row flex-col overflow-hidden pt-[70px]">
					<Writer Markdown={Markdown} setMarkdown={setMarkdown} />
					<Reader Markdown={Markdown} setMarkdown={setMarkdown} />
				</div>
			</div>
		</div>
	);
}

export default App;
