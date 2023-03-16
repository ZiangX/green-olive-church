import React from 'react';
import Link from 'next/link';

const Youtube = () => {
	return (
		<div id='content' className='page-content-wrap' style={{ padding: '0%' }}>
			<div className='breadcrumbs-wrap'>
				<div className='container'>
					<h3 className='page-title' style={{ fontSize: '35px' }}>
						往期视频
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
					<div
						id='chose-donate'
						className='chose-donate youtube-button-container'
						style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}
					>
						<Link
							href='https://www.youtube.com/playlist?list=PLWGFSwhKtwGZHUzac10_20OY0SSFgMZ8v'
							className='btn btn-style-9 btn-big'
							style={{ backgroundColor: '#aec186', borderColor: '#aec186' }}
						>
							主日证道
						</Link>
						<Link
							href='https://www.youtube.com/playlist?list=PLWGFSwhKtwGamzwl0qhv6af0lcPseT45U'
							className='btn btn-style-9 btn-big'
							style={{ backgroundColor: '#aec186', borderColor: '#aec186' }}
						>
							工作伦理系列讲道
						</Link>
						<Link
							href='https://youtube.com/playlist?list=PL5NBCzhKLlAQjbb9KK_3LvPcPR3Xzlw8l'
							className='btn btn-style-9 btn-big'
							style={{ backgroundColor: '#aec186', borderColor: '#aec186' }}
						>
							主日学
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Youtube;
