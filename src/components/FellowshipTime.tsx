import React from 'react';

const FellowshipTime = () => (
	<div className='icons-box style-2 flex-row no-gutters item-col-4'>
		<div className='icons-wrap'>
			<div className='bg-img' style={{ backgroundImage: 'url(/images/prayer_meeting.jpg)' }}></div>
			<div className='icons-item'>
				<div className='item-box'>
					<h4 className='icons-box-title'>祷告会</h4>
					<p>每周六 18:00-19:00</p>
				</div>
			</div>
		</div>
		<div className='icons-wrap'>
			<div className='bg-img' style={{ backgroundImage: 'url(/images/fellowship.jpg)' }}></div>
			<div className='icons-item'>
				<div className='item-box'>
					<h4 className='icons-box-title'>团契查经</h4>
					<p>每周六 19:00-21:00</p>
				</div>
			</div>
		</div>
		<div className='icons-wrap'>
			<div className='bg-img' style={{ backgroundImage: 'url(/images/sunday_school.jpg)' }}></div>
			<div className='icons-item'>
				<div className='item-box'>
					<h4 className='icons-box-title'>主日学</h4>
					<p>每周日 09:30-10:30</p>
				</div>
			</div>
		</div>
		<div className='icons-wrap'>
			<div className='bg-img' style={{ backgroundImage: 'url(/images/sunday_worship.jpeg)' }}></div>
			<div className='icons-item'>
				<div className='item-box'>
					<h4 className='icons-box-title'>主日崇拜</h4>
					<p>每周日 10:45-12:00</p>
				</div>
			</div>
		</div>
	</div>
);

export default FellowshipTime;
