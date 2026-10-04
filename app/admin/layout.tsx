'use client';
import {FormEvent,useEffect,useState} from 'react';
import Link from 'next/link';
const ADMIN_USER='samwestadmin';
const ADMIN_PIN='987654321';
export default function AdminLayout({children}:{children:React.ReactNode}){
 const [ready,setReady]=useState(false); const [authenticated,setAuthenticated]=useState(false); const [username,setUsername]=useState(''); const [pin,setPin]=useState(''); const [error,setError]=useState('');
 useEffect(()=>{setAuthenticated(localStorage.getItem('sam-west-admin-auth')==='1');setReady(true)},[]);
 function login(e:FormEvent){e.preventDefault();if(username.trim()===ADMIN_USER&&pin===ADMIN_PIN){localStorage.setItem('sam-west-admin-auth','1');setAuthenticated(true);setError('')}else setError('Incorrect username or PIN.');}
 if(!ready)return <main className="admin-auth"><div className="admin-login"><h1>Loading admin…</h1></div></main>;
 if(!authenticated)return <main className="admin-auth"><form className="admin-login" onSubmit={login}><Link href="/" className="brand"><span className="brand-mark">SW</span><span><strong>SAM WEST <span>DISTRIBUTES</span></strong><small>Admin access</small></span></Link><h1>Admin sign in.</h1><p>Enter the temporary credentials to access the Sam West control centre.</p>{error&&<div className="error" role="alert">{error}</div>}<label>Username<input value={username} onChange={e=>setUsername(e.target.value)} autoComplete="username" required /></label><label>PIN<input value={pin} onChange={e=>setPin(e.target.value)} type="password" inputMode="numeric" autoComplete="current-password" required /></label><button className="btn btn-dark wide" type="submit">Sign in <span aria-hidden="true">→</span></button><p className="admin-temp-note">Temporary testing credentials only. Replace with real authentication before production launch.</p></form></main>;
 return <>{children}<button className="admin-logout" style={{position:'fixed',left:16,bottom:16,zIndex:80}} onClick={()=>{localStorage.removeItem('sam-west-admin-auth');setAuthenticated(false)}}>Sign out</button></>;
}