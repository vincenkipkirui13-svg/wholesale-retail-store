export default function Icon({name,size=20}:{name:string,size?:number}){
  const p={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,ariaHidden:true};
  const paths:Record<string,React.ReactNode>={
    search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    cart:<><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L20 8H6"/></>,
    menu:<><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close:<><path d="m6 6 12 12M18 6 6 18"/></>,
    arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check:<path d="m5 12 4 4L19 6"/>,
    box:<><path d="m3 7 9 5 9-5M12 22V12M5 4l7-2 7 2-7 3-7-3Z"/><path d="M3 7v10l9 5 9-5V7"/></>,
    grocery:<><path d="M5 9h14l-1 11H6L5 9Z"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/></>,
    cleaning:<><path d="m9 3 6 2-1 3-6-2 1-3Z"/><path d="M9 8 7 21h10L15 10"/><path d="M17 12h3M17 16h2"/></>,
    personal:<><circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/><path d="M18 4v4M16 6h4"/></>,
    baby:<><path d="M7 8a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V8Z"/><path d="M9.5 12h.01M14.5 12h.01M10 15c1.3 1 2.7 1 4 0"/></>,
    beverages:<><path d="M7 3h10l-1 18H8L7 3Z"/><path d="M9 7h6M10 11h4"/><path d="M9 3 8 1M15 3l1-2"/></>,
    kitchen:<><path d="M5 3v18M5 8h5M10 3v5M15 3v18M15 3c3 1 4 3 4 5v2h-4"/></>,
    paper:<><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></>,
    essentials:<><path d="M12 3 14 8l5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.1h-2.5V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.5h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9-.3l-.1-.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0 1.6-1h.1v-2.5h2.5v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.5h-.1a1.7 1.7 0 0 0-1.6 1Z"/></>,
    plus:<><path d="M12 5v14M5 12h14"/></>,
    upload:<><path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/></>,
    filter:<><path d="M4 5h16M7 12h10M10 19h4"/></>,
    trash:<><path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 14h10l1-14M9 7V4h6v3"/></>,
    dashboard:<><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
    file:<><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></>,
    chevron:<path d="m8 10 4 4 4-4"/>
  };
  return <svg {...p}>{paths[name]??paths.file}</svg>;
}