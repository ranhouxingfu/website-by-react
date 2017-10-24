import React from 'react'
import { Grid, Col, Image, Icon} from 'amazeui-react'
export default class cook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return(
			<div  className='contain '>
			<Grid className="doc-g">
    <Col sm={12} md={7} lg={7}>
			<p className='aboutus-design'>在什么都讲究跨界、讲究混搭的时代，这些工业元素也跨界到美食领域。以粗犷线条勾勒出“钢筋铁骨”，红砖水泥填充出“好皮囊”，再以钢铁器械细心打磨，每一家工业风格餐厅都有自己的特色。习惯了去文艺精致的餐厅吃饭的你，偶尔也可以换个风格，换换口味。
</p>
<p className='aboutus-design'>一家充满西北醇厚风情的餐厅。开放式厨房，店门口就能看见大厨烹饪的每一道佳肴。装修简洁，暖色调，红白格子桌布，清新中带业暖意。~~</p>
      </Col>
    <Col sm={12} md={5} lg={5}><div className='aboutus-img'>
<img src='../images/1.jpg'/>
</div></Col>
  </Grid>
 	<div className='special-title aboutus-title'>
 	<h3 className='special-p'><Icon icon='mortar-board'></Icon></h3>
 	<h3 className='special-p'>金牌厨师</h3>
 	</div>
 <Grid className="doc-g img-list">
 <Col sm={12} md={5} lg={5} lgOffset={1} mdOffset={1}>
    <Col sm={2} md={3} lg={3}>
      <Image
      src="../images/cook1.jpg"
      width="70"
      height="70"
      circle />
      </Col>
    <Col sm={9} md={9} lg={9}><p>餐的主要特业是主料突出，形色美观，口味鲜美，营养丰富，供应方便等。</p></Col>
    </Col>
    <Col  sm={12} md={5} lg={5}>
     <Col sm={2} md={3} lg={3}>
      <Image
      src="../images/cook2.jpg"
      width="70"
      height="70"
      circle />
      </Col>
    <Col sm={9} md={9} lg={9}><p>餐的主要特业是主料突出，形色美观，口味鲜美，营养丰富，供应方便等。</p></Col></Col>
    <Col lg={1} md={1}></Col>
    <Col  sm={12} md={5} lg={5} lgOffset={1} mdOffset={1}>
     <Col sm={2} md={3} lg={3}>
      <Image
      src="../images/cook3.jpg"
      width="70"
      height="70"
      circle />
      </Col>
    <Col sm={9} md={9} lg={9}><p>餐的主要特业是主料突出，形色美观，口味鲜美，营养丰富，供应方便等。</p></Col></Col>
        <Col  sm={12} md={5} lg={5}>
     <Col sm={2} md={3} lg={3}>
      <Image
      src="../images/cook4.jpg"
      width="70"
      height="70"
      circle />
      </Col>
    <Col sm={9} md={9} lg={9}><p>餐的主要特业是主料突出，形色美观，口味鲜美，营养丰富，供应方便等。</p></Col></Col>
     <Col md={1} lg={1}></Col>
  </Grid>
		</div>
		)
	}
}