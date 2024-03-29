import './index.scss';

import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Sider, Content } = Layout;
import { useNavigate, Outlet } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const contentStyle: React.CSSProperties = {};

const layoutStyle: React.CSSProperties = {
	height: '100%',
	width: '100%',
};

const siderStyle: React.CSSProperties = {
	background: '#fff',
};
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('SignaturePad', 'signaturePad'),
	getItem('webGL', 'webgl'),
	getItem('PageClipPath', 'pageClipPath'),
	getItem('OtherDemo3', 'otherDemo3'),
	getItem('OtherDemo4', 'otherDemo4'),
];

export default function Home() {
	const navigate = useNavigate();

	return (
		<Layout style={layoutStyle}>
			<Sider style={siderStyle}>
				<Menu
					mode="inline"
					style={{}}
					items={items}
					defaultSelectedKeys={[]}
					onSelect={({ key }) => {
						navigate(`/demo/${key}`);
					}}
				/>
			</Sider>
			<Content style={contentStyle}>
				<Outlet></Outlet>
			</Content>
		</Layout>
	);
}
