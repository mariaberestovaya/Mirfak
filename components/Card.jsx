import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import { ContentCard } from '@vkontakte/vkui';
import { useState } from 'react';
import css from 'styled-jsx/css';
import { mutate } from 'swr';

import { custom_fetch, s } from '../helpers';

export default function Card({ _id, title, text, color }) {
	const [note_title, set_note_title] = useState(title);
	const [note_text, set_note_text] = useState(text);

	const { className, styles } = css.resolve`
		background: ${color};
	`;

	return (
		<>
			<ContentCard
				className={className}
				header={
					<>
						<button
							className="cross"
							onClick={async () => {
								await custom_fetch(`delete_note/${_id}`);

								mutate(s('notes'));
							}}
						>
							<Icon16Cancel />
						</button>
						<input
							value={note_title}
							spellCheck="false"
							placeholder="title"
							onChange={async (e) => {
								const v = e.target.value;

								set_note_title(v);

								await custom_fetch(`update_note/${_id}`, {
									title: v,
									text: note_text,
									color,
								});
							}}
						/>
					</>
				}
				text={
					<textarea
						value={note_text}
						rows="3"
						spellCheck="false"
						placeholder="text"
						onChange={async (e) => {
							const v = e.target.value;

							set_note_text(v);

							await custom_fetch(`update_note/${_id}`, {
								title: note_title,
								text: v,
								color,
							});
						}}
					/>
				}
				maxHeight={150}
			/>
			{styles}
			<style jsx>{`
				 {
				.cross {
					border: 0;
					background-color: transparent;
					padding: 10px;

					position: absolute;
					right: 0;
					top: 0;
					z-index: 1;
				}
				.cross:focus {
					outline: none;
					border: none;
				}
				input {
					background: transparent;
					border: none;
					font-size: 17px;
					font-weight: 600;
					line-height: 22px;
					outline: none;
					width: 100%;
				}

				input::selection {
					background-color: transparent;
				}

				textarea {
					background: transparent;
					border: none;
					font-size: 15px;
					font-weight: 400;
					height: 20px;
					line-height: 20px;
					outline: none;
					resize: none;
					width: 100%;
				}

				textarea::selection {
					background-color: transparent;
				}
			`}</style>
		</>
	);
}
