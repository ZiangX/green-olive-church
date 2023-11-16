import React from 'react'

const Location = () => {
	return (
		<div style={{ padding: '20px 5px' }}>
			<h3 style={{ textAlign: 'center', fontSize: '35px' }}>聚会地点</h3>
			<div className='flex-row'>
				<div className='col-md-3 offset-md-3'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.7813690302423!2d-73.58102922326873!3d45.49434723142599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6bc133a3bf%3A0xe6a2fa3ba013c8e!2s1610%20Saint-Catherine%20St%20W%2C%20Montreal%2C%20QC%20H3H%201L9!5e0!3m2!1sen!2sca!4v1700095634724!5m2!1sen!2sca'
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
							<br /> Classroom B055
							<br /> 1610 St. Catherine West
							<br /> Montréal, QC H3H 1L9
						</span>
					</p>
					<p className='info-item'>
						<span>Email:</span> <br /> greenolivemtl@gmail.com
					</p>
				</div>
			</div>
		</div>
	)
}

export default Location
