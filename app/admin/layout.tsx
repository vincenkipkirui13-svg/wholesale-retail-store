import type {Metadata} from 'next';
import AdminLogin from './AdminLogin';
import {logoutAdmin,verifyAdminSession} from './actions';

export const metadata:Metadata={
  title:'Admin',
  robots:{index:false,follow:false},
};

export default async function AdminLayout({children}:{children:React.ReactNode}){
  const authenticated=await verifyAdminSession();
  if(!authenticated)return <AdminLogin />;
  return <>{children}<form action={logoutAdmin}><button className="admin-logout" style={{position:'fixed',left:16,bottom:16,zIndex:80}} type="submit">Sign out</button></form></>;
}
