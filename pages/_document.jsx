import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
	render() {
		return (
			<Html className="vkui">
				<Head />
				<body>
					<Main />
					<script
						dangerouslySetInnerHTML={{
							__html:
								"document.getElementById('__next').classList.add('vkui__root');",
						}}
					/>
					<NextScript />
				</body>
			</Html>
		);
	}
}
