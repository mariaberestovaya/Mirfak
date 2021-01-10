import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	Panel,
	Root,
	View,
} from '@vkontakte/vkui';
import { useState } from 'react';

import { is_development } from '../helpers';
import Notes from '../panels/Notes';

const m = 'main';

export default function Main() {
	const [active_view, set_active_view] = useState(m);
	const [active_panel, set_active_panel] = useState(m);

	const [history, set_history] = useState([m]);

	const go_back = () => {
		const _history = [...history];

		_history.pop();

		const _active_panel = _history[_history.length - 1];

		if (active_panel === 'main') {
			console.log('VKWebAppEnableSwipeBack');
		}

		set_active_panel(_active_panel);
		set_history(_history);
	};

	const go_forward = (_active_panel) => {
		const _history = [...history];

		_history.push(_active_panel);

		if (active_panel === 'main') {
			console.log('VKWebAppDisableSwipeBack');
		}

		set_active_panel(_active_panel);
		set_history(_history);
	};

	return (
		<ConfigProvider isWebView={is_development}>
			<AdaptivityProvider>
				<AppRoot>
					<Root activeView={active_view}>
						<View
							onSwipeBack={go_back}
							activePanel={active_panel}
							history={history}
							id={m}
						>
							<Panel id={m}>
								<Notes />
							</Panel>
						</View>
					</Root>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}
