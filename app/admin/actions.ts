'use server';

import {createHmac,timingSafeEqual} from 'node:crypto';
import {cookies} from 'next/headers';
import {revalidatePath} from 'next/cache';

const COOKIE_NAME='sam-west-admin-session';
const MAX_AGE=60*60*8;

function config(){
  const username=process.env.ADMIN_USERNAME;
  const password=process.env.ADMIN_PASSWORD;
  const secret=process.env.AUTH_SECRET;
  if(!username||!password||!secret) return null;
  return {username,password,secret};
}

function signature(username:string,issuedAt:string,secret:string){
  return createHmac('sha256',secret).update(username+':'+issuedAt).digest('hex');
}

export async function verifyAdminSession(){
  const cfg=config();
  if(!cfg) return false;
  const token=(await cookies()).get(COOKIE_NAME)?.value;
  if(!token) return false;
  const [issuedAt,provided]=token.split('.');
  if(!issuedAt||!provided||!/^\d+$/.test(issuedAt)) return false;
  const age=Math.floor(Date.now()/1000)-Number(issuedAt);
  if(age<0||age>MAX_AGE) return false;
  const expected=signature(cfg.username,issuedAt,cfg.secret);
  try{
    return timingSafeEqual(Buffer.from(provided,'hex'),Buffer.from(expected,'hex'));
  }catch{
    return false;
  }
}

export async function loginAdmin(formData:FormData){
  const cfg=config();
  if(!cfg) return {ok:false,error:'Admin authentication is not configured on this deployment.'};
  const username=String(formData.get('username')||'').trim();
  const password=String(formData.get('password')||'');
  if(username!==cfg.username||password!==cfg.password) return {ok:false,error:'Incorrect username or password.'};
  const issuedAt=String(Math.floor(Date.now()/1000));
  const token=issuedAt+'.'+signature(cfg.username,issuedAt,cfg.secret);
  (await cookies()).set(COOKIE_NAME,token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/admin',maxAge:MAX_AGE});
  revalidatePath('/admin');
  return {ok:true};
}

export async function logoutAdmin(){
  (await cookies()).set(COOKIE_NAME,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/admin',maxAge:0});
  revalidatePath('/admin');
}
