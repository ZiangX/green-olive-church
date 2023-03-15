import React from 'react';
import Link from 'next/link'

const StoryAndDocument = () => (
	<div className='call-out size3 parallax-section'>
		<div className='container wide'>
			<div id='chose-donate' className='chose-donate' style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Link
					href='/our-history'
					className='btn btn-style-9 btn-big'
					style={{ backgroundColor: '#aec186', borderColor: '#aec186' }}
				>
					我们的历史
				</Link>
				<Link
					href='/document/governance_charter.pdf'
					className='btn btn-style-9 btn-big'
					style={{ backgroundColor: '#aec186', borderColor: '#aec186' }}
				>
					治理章程
				</Link>
			</div>
		</div>
	</div>
);

export default StoryAndDocument;
