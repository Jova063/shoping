import React from 'react'
import{ Nav, Navbar }from "react-bootstrap"
import img from "../../pages/img/logo.png"
import img2 from "../../pages/img/Rectangle.png"
import img3 from "../../pages/img/2.png"
import img4 from "../../pages/img/1.png"
import img5 from "../../pages/img/Rectangle2.png"
import img6 from "../../pages/img/Recangle3.png"
import img7 from "../../pages/img/men.png"
import img8 from "../../pages/img/women.png"
import img9 from "../../pages/img/object.png"
import {BiCart} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Rate } from 'antd';

import { Modal } from 'antd';
import { Pagination } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
export default function Dashboard() {
  const [value, setValue] = useState(3);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
       
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    <Navbar className='navbar'  expand="lg">
        <Navbar.Brand href="#" className='logo'>Ugmonk  <img src={img} alt=""className='logo-img'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            
          >
            <Nav.Link  href="#action1">Men</Nav.Link>
            <Nav.Link  href="#action2">Women</Nav.Link>
            <Nav.Link href="#action3">Objects</Nav.Link>
            <Nav.Link href="#action3">Analog</Nav.Link>
            
          </Nav>
          <BiCart className='biCart' type="primary" onClick={showModal} />
        </Navbar.Collapse>
    </Navbar>
    
        <div className='navbar_img'>
          <img src={img2} alt='' width='100%' height='100%'/>
          <div className='navbar_text'>
            <h4 className='navbar-title'>Analog: The Simplest Productivity System</h4>
            <a href='#!'className='navbar-info' >Shop now →</a>
          </div>
        </div>
        <div className='cards' >
          <div className='links'>
            <a className='link' href='#!'>New Arrivals</a>
            <a className='link' href='#!'>Analog</a>
            <a className='link' href='#!'>Final Stock</a>
            <a className='link' href='#!'>Best Sellers</a>
            <a className='link' href='#!'>Clothing</a>
            <a className='link' href='#!'>Objects</a>
          </div>
          <div className='card1'>
          <div className='card'>
            <img src={img3} alt='' className='card_img'/>
            <div className='card_title'><h6>Analog Starter Kit</h6><h6 className='card_title1'>(Walnut)</h6></div>
            <div className='card_info'><p className='card-info2'>$103.00</p><p className='card-info1'>$89.00</p></div>
            <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
          </div>

          <div className='card'>
            <img src={img4} alt='' className='card_img'/>
            <div className='card_title'><h6>Analog Starter Kit</h6><h6 className='card_title1'>(3-Pack)</h6></div>
            <div className='card_info'><p>$39.00</p></div>
          </div>
          <div className='card'>
            <img src={img5} alt='' className='card_img'/>
            <div className='card_title'><h6>Analog Starter Kit</h6></div>
            <div className='card_info'><p className='card-info2'>$137.00</p><p className='card-info1'>$130.00</p></div>
          </div>
          <div className='card'>
            <img src={img6} alt='' className='card_img'/>
            <div className='card_title'><h6>Analog Starter Kit</h6><h6 className='card_title1'>(Walnut)</h6></div>
            <div className='card_info'><p>$38.00</p></div>
          </div>
           
          </div>
          <div className="pagination">
<Pagination defaultCurrent={1} total={40}  />
</div>
          <button className='card_btn'><a className='card_btn1' href='#!'>Shop New Arrivals </a> </button>
        </div>
        <section className='analog'>
            <div className='box'>
              <p>1.9 million cards shipped!</p>
            </div>
            <h1 className='analog_title'>Analog — The simplest productivity system</h1>
            <button className='analog_btn'>Now Available →</button>
            <a className='analog_link' href='#!'>Show me how it works</a>
        </section>
        <section className='jurnal'>
          <div className='jurnal_card'>
             <div className='jurnal-left'>
               <h1 className='jurnal_title'>Refillable Discbound Journals</h1>
               <p className='jurnal_info'>Heirloom quality you'll be holding onto for life</p>
               <a className='jurnal_link' href='#!'>Shop the collection →</a>
             </div>
             <div className='jurnal-right'></div>
          </div>
        </section>
        <section className='katalog'>
          <h1 className='katalog_title'>Our mission is to create simple, beautiful objects that combine form and function.</h1>
          <div className='katalog_top'>
            <div className='men'> 
            <img src={img7} alt=''/>
            <a href='#!'>Shop Mens →</a>
            </div>
            <div className='women'> 
            <img src={img8} alt=''/>
            <a href='#!'>Shop Womens →</a>
            </div>
          </div>
          <div className='katalog_botton'>
            <img src={img9} alt=''/>
            <div><a href='#!'>Shop Objects →</a></div>
          </div>
        </section>
        <section className='story'>
          <h1 className='story_title'>A design studio in Downingtown, PA, creating and curating products that combine form & function</h1>
          <a className='story_link' href='#!'>Read Our Story →</a>
        </section>
        <footer className='loop'>
          <h1 className='loop_title' >Stay in the loop</h1>
          <p className='loop_info'>Be the first to know when new products drop and get behind-the-scenes content straight from Ugmonk’s founder.</p>
          <div className='input'>
            <input type="text"  className='loop_input'></input>
            <button className='input_btn' ></button>
          </div>
        </footer>
        <footer className='footer'>
            <div className='footer_left'>
              <ul  className='footer_left1'>
                <li><a href='#!' className='footer_left11'>Customer Service</a></li>
                <li><a href='#!' className='footer_left11'>Help / FAQ</a></li>
                <li><a href='#!' className='footer_left11'>Returns & Exchanges</a></li>
                <li><a href='#!' className='footer_left11'>Sizing</a></li>
                <li><a href='#!' className='footer_left11'>Gift Cards</a></li>
                <li><a href='#!' className='footer_left11'>Contact Us</a></li>
              </ul>
              <ul  className='footer_left2'>
                <li><a href='#!'  className='footer_left22'>About</a></li>
                <li><a href='#!'  className='footer_left22'>Our Story</a></li>
                <li><a href='#!'  className='footer_left22'>Shop</a></li>
                <li><a href='#!'  className='footer_left22'>Journal</a></li>
                <li><a href='#!'  className='footer_left22'>About Our Tees</a></li>
                <li><a href='#!'  className='footer_left22'>Reviews</a></li>
              </ul>
            </div>
            <div>
            <div className='footer_right'>
             <div>
              <p className='footer_right1'>© Ugmonk 2021</p>
              <p className='footer_right2' >All images and content may not be used without permission</p>
             </div>
             <img src={img} alt="" className='footer_right3'/>
            </div>
            <div className='img_footer'>
              <BsInstagram className='bsIns'/>
              <AiOutlineTwitter className='aiOut'/>
              <AiFillFacebook className='aiFill'/>
            </div>
            </div>

        </footer>
        

    </div>
  )
}
