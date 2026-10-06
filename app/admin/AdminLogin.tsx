'use client';

import {FormEvent,useState,useTransition} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {loginAdmin} from './actions';

export default function AdminLogin(){
  const router=useRouter();
  const [pending,startTransition]=useTransition();
  const [error,setError]=useState('');
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=e.currentTarget;
    setError('');
    startTransition(async()=>{
      const result=await loginAdmin(new FormData(form));
      if(result.ok) router.refresh();
      else setError(result.error||'Unable to sign in.');
    });
  }
  return <main className="admin-auth"><form className="admin-login" onSubmit={submit}><Link href="/" className="brand"><span className="brand-mark">SW</span><span><strong>SAM WEST <span>DISTRIBUTES</span></strong><small>Admin access</small></span></Link><h1>Admin sign in.</h1><p>Use the administrator credentials configured in the deployment environment.</p>{error&&<div className="error" role="alert">{error}</div>}<label htmlFor="admin-username">Username<input id="admin-username" name="username" autoComplete="username" required /></label><label htmlFor="admin-password">Password<input id="admin-password" name="password" type="password" autoComplete="current-password" required /></label><button className="btn btn-dark wide" type="submit" disabled={pending}>{pending?'Signing in…':'Sign in'} <span aria-hidden="true">→</span></button><p className="admin-temp-note">Authentication is handled server-side. Credentials are never stored in the browser.</p></form></main>;
}
