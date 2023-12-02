import logo from './logo.svg';
import './App.css';
import search from './search.png'
import domand from './domand.jpg'
import signal from './signal.jpg'
import light from './light.jpg'
import click from './click.jpg'



function App() {
  return (
    <div className='comtianer'>
<div className='root'>
  <p className='logo'>BEXAR
  </p>
  <ul>
    <li>Home</li>
    <li>About As</li>
    <li>BLOG</li>
    <li>CONTACT</li>
    <li>PAGES</li>
    <li>SHORTCODE</li>
  </ul>
  <div className='img'>
    <img src={search} alt='kk' className='img1' />
  </div>

  <div className='button'> GET STARTED </div>
  

</div>
<div className='cotent'>
<div className='heading'>
<p className='title'>WE ARE TO</p>
<p className='head'> PLANNING BUSINESS</p>
<p className='head-content'>lorem ipsum dolor sit amet,consectetur adipsicing elit</p>
</div>
<div className='button-p'>MORE DETAILS</div>

</div>
<div className='card'>
<div className='card1'>
<img src={domand} alt='kk' className='img2' />
<p className='card-head'>
  BUSINESS SOLUTION
</p>
<p className='card-content'>
lorem ipsum dolor sdit amet constur adipelit sed.
</p>
</div>

<div className='card2'>
<img src={signal} alt='kk' className='img2' />
<p className='card-head1'>
  MARKET RESEARCH
</p>
<p className='card-content1'>
lorem ipsum dolor sdit amet constur adipelit sed.
</p>

</div>
<div className='card3'>
<img src={light} alt='kk' className='img4' />
<p className='card-head2'>
  BUSINESS STRATEGY
</p>
<p className='card-content2'>
lorem ipsum dolor sdit amet constur adipelit sed.
</p>

</div>
<div className='card4'>
<img src={click} alt='kk' className='img5' />
<p className='card-head3'>
  BUSINESS STRATEGY
</p>
<p className='card-content3'>
lorem ipsum dolor sdit amet constur adipelit sed.
</p>

</div>

</div>

 
</div>
  );
}

export default App;
