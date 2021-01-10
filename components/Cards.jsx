import { Icon56ErrorOutline, Icon56GhostOutline } from '@vkontakte/icons';
import { CardGrid, IOS, Placeholder, usePlatform } from '@vkontakte/vkui';
import { useMemo } from 'react';
import useSWR from 'swr';

import { s } from '../helpers';
import Card from './Card';

export default function Cards() {
	const { data: notes, error } = useSWR(s('notes'), {
		suspense: true,
	});

	const platform = usePlatform();

	if (error) {
		return (
			<Placeholder icon={<Icon56ErrorOutline />}>Произошла ошибка.</Placeholder>
		);
	} else if (!notes.length) {
		return (
			<Placeholder icon={<Icon56GhostOutline />}>
				Здесь пока ничего нет.
			</Placeholder>
		);
	}

	const _notes = useMemo(
		() => notes.map((note, key) => <Card {...note} key={key} />),
		[notes]
	);

	return (
		<CardGrid size="l">
			{_notes}
			<style jsx global>{`
				.CardGrid--l {
					padding-top: ${platform === IOS ? '12' : '16'}px;
				}
			`}</style>
		</CardGrid>
	);
}
