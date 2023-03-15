import React from 'react';

const Location = () => {
	return (
		<div style={{ padding: '20px 5px' }}>
			<h3 style={{ textAlign: 'center', fontSize: '35px' }}>聚会地点</h3>
			<div className='flex-row'>
				<div className='col-md-3 offset-md-3'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5593.453700704849!2d-73.57982!3d45.495445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6aff8c8015%3A0x7347e112108554be!2s1625%20Boul.%20de%20Maisonneuve%20Ouest%2C%20Montr%C3%A9al%2C%20QC%20H3H%202N4!5e0!3m2!1sen!2sca!4v1663284550187!5m2!1sen!2sca'
						width='400'
						height='300'
						style={{ border: '0' }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
				<div className='col-md-3 our-info style-2'>
					<p className='info-item'>
						<span>Address:</span>
						<span>
							<br /> 1625 Boulevard de Maisonneuve O #405
							<br /> code: 0405 （Jade College）
							<br /> Montréal, QC H3H 2N4
						</span>
					</p>
					<p className='info-item'>
						<span>Email:</span> <br /> greenolivemtl@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default Location;
