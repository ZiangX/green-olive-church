import React from 'react';

const IconBox = () => (
	<div className='page-section'>
		<div className='container wide'>
			<div className='icons-box style-1 type-2 flex-row item-col-3'>
				<div className='icons-wrap'>
					<div className='icons-item'>
						<div className='item-box'>
							<i className='licon-man'></i>
							<h4 className='icons-box-title' style={{ color: 'black', fontSize: '25px' }}>
								我们是谁？
							</h4>
							<p>青橄榄教会是一个致力于把福音传遍校园，为基督赢得这世代的华人留学生教会。</p>
						</div>
					</div>
				</div>

				<div className='icons-wrap'>
					<div className='icons-item'>
						<div className='item-box'>
							<i className='licon-bullhorn'></i>
							<h4 className='icons-box-title' style={{ color: 'black', fontSize: '25px' }}>
								我们的使命？
							</h4>
							<p>
								青橄榄教会蒙神呼召，带领华人学生系统性地理解、继承和传讲福音、见证福音；
								并装备他们做主门徒，在生命中活出信仰，服事基督、服事教会，成为神国的精兵。
							</p>
						</div>
					</div>
				</div>

				<div className='icons-wrap'>
					<div className='icons-item'>
						<div className='item-box'>
							<i className='licon-clipboard-check'></i>
							<h4 className='icons-box-title' style={{ color: 'black', fontSize: '25px' }}>
								我们的信仰告白？
							</h4>
							<p>我们认信使徒信经和西敏小要理问答。</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default IconBox;
