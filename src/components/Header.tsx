import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
	<header id='header' className='header style-2 sticky-header fixed-header'>
		<div className='top-header'>
			<div className='logo-wrap'>
				<Link href='/' className='logo'>
					{/* <a className='logo'> */}
					<Image src='/images/logo-new.jpg' alt='' width={150} height={80} />
					{/* </a> */}
				</Link>
			</div>
		</div>
	</header>
);

export default Header;
