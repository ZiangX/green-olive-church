import Image from 'next/image';
import { Slide } from 'react-slideshow-image';

const Slider = () => {
	return null 
	return (
		<Slide>
			<div className='each-slide-effect'>
				<div style={{ backgroundImage: `url("/images/background-big.png")` }}>
					<span>Slide 1</span>
				</div>
			</div>
		</Slide>
	);

	return (
		<div
			style={{
				backgroundImage: 'url("/images/background-big.png")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '800px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: '#ffffff',
				padding: '0 20px',
			}}
		>
			<span
				style={{
					fontFamily: 'ZCOOL XiaoWei',
					fontSize: '82px',
					color: '#aec186',
					lineHeight: '120px',
				}}
			>
				至于我，就像神殿中的
				<br id='mobile-break' />
				青橄榄树；
				<br />
				我永永远远倚靠神的慈爱
			</span>
			<br />
			<span style={{ fontFamily: 'ZCOOL XiaoWei', fontSize: '41px', color: '#aec186' }}>诗篇52:8</span>
		</div>
	);
	return (
		<div className='rev-slider-wrapper'>
			<div id='rev-slider' className='rev-slider tp-simpleresponsive' data-version='5.0'>
				<ul>
					<li data-transition='fade'>
						<div className='rev-slidebg'>
							<Image src='/images/background-big.png' alt='' layout='fill' />
						</div>
						<div
							className='tp-caption tp-resizeme scaption-white-large'
							data-x={['center', 'center', 'center', 'center']}
							data-hoffset='0'
							data-y={['middle', 'middle', 'middle', 'middle']}
							data-voffset='-50'
							data-whitespace='nowrap'
							data-frames='[{"delay":450,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":1000,"frame":"999","to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
							data-responsive_offset='on'
							data-elementdelay='0.05'
						>
							<span
								style={{
									fontFamily: 'ZCOOL XiaoWei',
									fontSize: '82px',
									color: '#aec186',
									lineHeight: '120px',
								}}
							>
								至于我，就像神殿中的
								<br id='mobile-break' />
								青橄榄树；
								<br />
								我永永远远倚靠神的慈爱
							</span>
							<br />
							<span style={{ fontFamily: 'ZCOOL XiaoWei', fontSize: '41px', color: '#aec186' }}>
								诗篇52:8
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Slider;
