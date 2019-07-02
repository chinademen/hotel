import React, { Fragment, Component } from 'react';
import './index.less'
import Slider from "react-slick";
import { arraySlice } from '@/config.js';
import Modal from "./modal"
function Introduce({ menu, title, des, content, bgImg }) {
  return (
    <Fragment>
      <div className="h5introduce">
        <img className="logo" src={require('@/assets/h5/logo.png')} alt='' />
        <div className="word">
          <p> 雅阁酒店加盟 </p>
          <h3> <b> 1000+ </b> 投资者的首选 </h3>
          <h6> 快至2-3年回本  </h6>
        </div>
        <div className="btn">
          <button> 加盟申请 </button>
        </div>
        <ul>
          {
            menu.map((ele, i) => {
              return (
                <li key={i}>
                  <img src={ele.img} alt='' />
                  <p> {ele.des} </p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="h5introduce1">
        <div className="word">
          <h3> {title} </h3>
          <h6> {des} </h6>
          <p> {content} </p>
          <img className="logo" src={bgImg} alt='' />
        </div>
      </div>
    </Fragment>

  )
}

function Power({ bgList, slickList }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 5000,

    appendDots: dots => (
      <div className="dots">
        <ul className="dots_ul"> {dots} </ul>
      </div>
    ),
    customPaging: i => <span> </span>
  };
  return (
    <div className="h5Power">

      <div className="h5Power_top">
        <div className="main">
          <h3> {bgList.title} </h3>
          <p> {bgList.des} </p>
          <ul>
            {
              bgList.list.map((ele, i) => {
                return (
                  <li key={i}>
                    <h3> {ele.title} </h3>
                    <p> {ele.des} </p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="h5Power_bottom">
        <Slider {...settings}>
          {
            arraySlice(slickList, 2).map((ele, i) => {
              return (
                <ul key={`${i}a`} className="slider_content">
                  {
                    ele.map((item, inx) => {
                      return (
                        <li key={`${inx}b`}>
                          <h3> {item.time} </h3>
                          <p> {item.words} </p>
                          <span> {item.by} </span>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </Slider>
      </div>

    </div>
  )
}

class Profitability extends Component {
  state = {
    ativeCode: 0,
  }
  change = (e) => {
    this.setState({
      ativeCode: e
    })
  }
  render() {
    const { slickList, des } = this.props;
    const { ativeCode } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000,
      afterChange: (e) => this.change(e),
      appendDots: dots => (
        <div className="dots">
          <ul className="dots_ul"> {dots} </ul>
        </div>
      ),
      customPaging: (i) => {

        return <img src={slickList[i].dots} alt="" />
      }
    };
    return (
      <div className="h5Profitability">
        <Slider {...settings}>
          {
            slickList.map((ele, i) => {
              return (
                <img key={i} className="bgimg" src={require(`@/assets/h5/dots${i + 1}.png`)} alt='' />
              )
            })
          }
        </Slider>
        <div className="profitability_top">
          <h3> <b> 9 </b> 大互补品牌 <br /> 精准高效投资任意选</h3>
          <p> 雅阁拥有全球9大酒店品牌，覆盖奢华酒店、城市精品酒店、度假村等中高端酒店品牌。 </p>
        </div>
        <div className="profitability_botton">
          <div className="top">
            <h1> {des[ativeCode].name} </h1>
            <h3> {des[ativeCode].title} </h3>
            <p> {des[ativeCode].des} </p>
          </div>
          <div className="bottom">
            <p dangerouslySetInnerHTML={{ __html: des[ativeCode].word }}>

            </p>
          </div>
        </div>
      </div>
    )
  }
}


class Support extends Component {
  render() {
    const { positionList } = this.props;
    return (
      <div className="h5support">
        <h3> <b> 7 </b> 大优势，助力无忧创业 </h3>
        <p> 雅阁酒店集团拥有成熟的运营模式和盈利模式 <br /> 帮助业主实现无忧创业 </p>
        <ul>
          {
            positionList.map((ele, i) => {
              const style = {
                'background': `url(${ele.img}) no-repeat center`
              }
              return (
                <li style={style} key={i}>
                  <h3> {ele.title} </h3>
                  <p> {ele.des} </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


class Investment extends Component {

  state = {
    activeCode1: 0,
    activeCode2: 0,
  }

  changeCode = (e, name) => {
    this.setState({
      [name]: e
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 5000,

      appendDots: dots => (
        <div className="dots">
          <ul className="dots_ul"> {dots} </ul>
        </div>
      ),
      customPaging: i => <span> </span>
    };
    const { investmentList1, investmentList2, casekey } = this.props;
    const { activeCode1, activeCode2 } = this.state;
    return (
      <div className="h5investment" id="investment">
        <div className="investment_top">
          <div className="top_main">
            <h3> 多方位管理支持，全力保障开业收益 </h3>
            <p> 雅阁酒店集团提供标准化和适应性的管理系统实现整店复制输出，全力保障开业收益 </p>
            <ul>
              {
                [...investmentList2, ...investmentList1].map((ele, i) => {
                  const cls = activeCode1 == i ? 'active_li' : ''
                  return (
                    <li onClick={() => this.changeCode(i, 'activeCode1')} className={cls} key={i}>
                      <h3> {ele.title} </h3>
                      <p> {ele.des} </p>
                      {
                        activeCode1 == i ?
                          <img src={require('@/assets/h5/close.png')} alt="" />
                          :
                          <img src={require('@/assets/h5/open.png')} alt="" />

                      }

                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="investment_bottom">
          <div className="bottom_main">
            <h3> {casekey.title} </h3>
            <p> {casekey.des} </p>
            <div className="Slider">
              <Slider {...settings}>
                {
                  casekey.list.map((ele, i) => {
                    return (
                      <div key={i} className="Slider_item">
                        <img src={ele.img} alt="" />
                        <p> {ele.title} </p>
                      </div>
                    )
                  })
                }

              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  state = {
    visibleModal: false
  }

  showModal = () => this.setState({ visibleModal: true })
  handleCloseModal = () => this.setState({ visibleModal: false })

  render() {
    const { visibleModal } = this.state;
    return (
      <div className="h5Footer">
        <a href="tel:13764567708"> 免费电话 </a>
        <a href="javaScript:;" onClick={this.showModal}> 投资收益计算 </a>
        <Modal visible={visibleModal} onClose={this.handleCloseModal} > 
            <div className="modal_content">
                <h3> 投资收益计算器 </h3>
                <ul>
                  <li>
                    <span> 预估房租:  </span> 
                    <input type="text" placeholder="如100 (万元/年)" />
                  </li>
                  <li>
                    <span> 预估房间数量: </span>
                    <input type="text" placeholder="如60 (间)" />
                  </li>
                  <li>
                    <span> 预估房价: </span>
                    <input type="text" placeholder="如300 (元/间)" />
                  </li>
                  <li>
                    <span> 预估出租: </span>
                    <input type="text" placeholder="80%" />
                  </li>
                  <li>
                    <span> 您的手机号: </span>
                    <input type="text" placeholder="请输入手机号" />
                  </li>
                </ul>
                <button onClick={this.handleCloseModal}> 提 交 </button>
                <img onClick={this.handleCloseModal}  src={require('@/assets/h5/cloed.png')}  alt=""/>
            </div>
        </ Modal>
      </div>
    )
  }
}

function App({ config: { body } }) {
  return (
    <Fragment>
      <Introduce {...body.introduce} />
      <Power {...body.power} />
      <Profitability {...body.profitability} />
      <Support {...body.support} />
      <Investment {...body.investment} />
      <Footer />
    </Fragment>
  );
}

export default App;