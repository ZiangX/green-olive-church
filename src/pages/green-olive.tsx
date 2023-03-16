import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import IconBox from '@/components/IconBox';
import StoryAndDocument from '@/components/StoryAndDocument';
import FellowshipTime from '@/components/FellowshipTime';
import Youtube from '@/components/Youtube';
import Location from '@/components/Location';
import Slider from '@/components/Slider';
import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>青橄榄教会</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/logo-new-cut.jpg' />
			</Head>
			<div>
				<div id='wrapper' className='wrapper-container'>
					<nav id='mobile-advanced' className='mobile-advanced'></nav>
					<Header />
					<Slider />
				</div>
				<div id='content'>
					{/* Three column introduction  */}
					<IconBox />
					{/* Our story and document */}
					<StoryAndDocument />
					{/* Fellowship time */}
					<FellowshipTime />
					{/* Youtube */}
					<Youtube />
				</div>
				{/* Footer Location */}
				<Location />
			</div>
		</>
	);
}
