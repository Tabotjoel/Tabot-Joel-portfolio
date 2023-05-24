import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' 
import me from '../../assets/IMG-20220124-WA0017.jpg'
import HeaderSocial from './headersocial' 
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Tabot Joel Ebangha</h1>
<h5 className='text-light'>Software Engineer </h5>
<CTA/>//here we are using the imported CTA component
<HeaderSocial/>//same here
<div className='my_image'>
<img src={me} alt='my image'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;