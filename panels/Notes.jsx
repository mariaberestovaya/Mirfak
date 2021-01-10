import { Icon28AddOutline } from '@vkontakte/icons';
import {
	FixedLayout,
	PanelHeader,
	PanelHeaderButton,
	PanelSpinner,
	Search,
} from '@vkontakte/vkui';
import { Suspense } from 'react';
import { mutate } from 'swr';

import Cards from '../components/Cards';
import { custom_fetch, s } from '../helpers';

export default function Notes() {
	return (
		<>
			<PanelHeader
				left={
					<PanelHeaderButton>
						<Icon28AddOutline
							onClick={async () => {
								await custom_fetch('create_note');

								mutate(s('notes'));
							}}
							fill="#2787F5"
						/>
					</PanelHeaderButton>
				}
				separator={false}
			>
				Заметки
			</PanelHeader>
			<FixedLayout vertical="top">
				<Search />
			</FixedLayout>
			<div className="notes__content">
				<Suspense fallback={<PanelSpinner size="small" />}>
					<Cards />
				</Suspense>
			</div>
			<style jsx global>{`
				.FixedLayout--top {
					box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.08),
						0 0 2px 0 rgba(0, 0, 0, 0.08);
				}

				.notes__content {
					padding-top: 52px;
				}
			`}</style>
		</>
	);
}
