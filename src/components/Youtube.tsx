import React from 'react';

const Youtube = () => {
	return (
		<div id='content' className='page-content-wrap' style={{ padding: '0%' }}>
			<div className='breadcrumbs-wrap'>
				<div className='container'>
					<h3 className='page-title' style={{ fontSize: '35px' }}>
						Youtube
					</h3>
					<div className='video-gallery flex-row item-col-1'>
						<div className='item-col'>
							<div className='responsive-iframe'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/Q8fn8obIFiE'
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Youtube;
