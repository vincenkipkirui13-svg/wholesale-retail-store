'use client';
import Link from 'next/link';
import {useState} from 'react';
import Icon from './Icon';
import {useCart} from './cart-store';

export default function StoreHeader(){
 const [open,setOpen]=useState(false); const {count,mode,setMode}=useCart();
 return <>
  <div className="announcement"><span>✦</span> SAM WEST DISTRIBUTES <span>•</span> Wholesale + retail in one store <span>•</span> Everyday value</div>
  <header className="site-header"><div className="header-inner">
   <button className="icon-btn mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menu"><Icon name={open?'close':'menu'}/></button>
   <Link href="/" className="brand"><span className="brand-mark">SW</span><span><strong>SAM WEST <span>DISTRIBUTES</span></strong><small>Wholesale & Retail</small></span></Link>
   <nav className={`main-nav ${open?'open':''}`}><Link href="/catalog">Shop</Link><Link href="/catalog?category=food-groceries">Groceries</Link><Link href="/catalog?category=home-cleaning">Home & Cleaning</Link><Link href="/catalog?category=personal-care">Personal Care</Link></nav>
   <div className="header-actions"><Link className="mode-toggle" href="/catalog" onClick={()=>setMode(mode==='retail'?'wholesale':'retail')}>{mode==='retail'?'Retail':'Wholesale'}</Link><Link className="cart-btn" href="/cart" aria-label={`Shopping cart${count>0?`, ${count} items`:``}`}><span className="cart-icon-wrap"><Icon name="cart" size={21}/>{count>0&&<b>{count}</b>}</span><span className="cart-label"><strong>Cart</strong><small>View cart</small></span></Link></div>
  </div></header>
 </>;
}