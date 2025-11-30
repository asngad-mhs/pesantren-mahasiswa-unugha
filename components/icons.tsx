import React from 'react';

type IconProps = {
  className?: string;
};

export const NULogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50,10A40,40,0,1,0,90,50,40,40,0,0,0,50,10ZM50,86A36,36,0,1,1,86,50,36,36,0,0,1,50,86Z"/>
    <path d="M50,18.5a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,50,18.5Z"/>
    <path d="M68.5,24.3a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,68.5,24.3Z"/>
    <path d="M28,31.5a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,28,31.5Z"/>
    <path d="M75.7,40.1a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,75.7,40.1Z"/>
    <path d="M20.8,50a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,20.8,50Z"/>
    <path d="M75.7,59.9a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,75.7,59.9Z"/>
    <path d="M28,68.5a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,28,68.5Z"/>
    <path d="M68.5,75.7a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,68.5,75.7Z"/>
    <path d="M50,81.5a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,50,81.5Z"/>
    <path d="M50,30A20,20,0,0,0,30,50c0,11,9,20,20,20s20-9,20-20A20,20,0,0,0,50,30Zm0,36A16,16,0,1,1,66,50,16,16,0,0,1,50,66Z"/>
  </svg>
);

export const UNUGHALogo: React.FC<IconProps> = NULogoIcon; // Alias for backward compatibility if needed.

export const QuranIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19.5A2.5 2.5 0 016.5 17H20v2H6.5A2.5 2.5 0 014 16.5v-11A2.5 2.5 0 016.5 3H20v2H6.5A2.5 2.5 0 014 7.5v12zM18 3v14"></path>
    </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
);

export const BedIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21V12a3 3 0 00-3-3H6a3 3 0 00-3 3v9h9z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6"></path>
    </svg>
);

export const LibraryIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
    </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0"></path>
    </svg>
);

export const MosqueIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 21h20M3 21V11.236a1 1 0 01.38-.8l4-3.2a1 1 0 011.24 0l4 3.2a1 1 0 01.38.8V21M11 21V11.236a1 1 0 01.38-.8l4-3.2a1 1 0 011.24 0l4 3.2a1 1 0 01.38.8V21M12 2a3 3 0 013 3v2h-6V5a3 3 0 013-3z"></path>
    </svg>
);

export const QuoteIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/>
  </svg>
);

export const PrayerBeadsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.88 7.1C18.88 9.21 17.5 12 15.5 12C13.5 12 12 10.88 12 8.88C12 6.88 13.5 6 15.5 6C16.88 6 17.5 6.44 18.88 7.1Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.88 15.1C12.88 17.21 11.5 20 9.5 20C7.5 20 6 18.88 6 16.88C6 14.88 7.5 14 9.5 14C10.88 14 11.5 14.44 12.88 15.1Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.88 15.1C13.13 14.83 13.5 14.5 14 14.12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8.88C12 9.5 12.13 10.25 12.5 11" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.38 8.1C6.38 9.21 6 11 5 11C4 11 3 10.25 3 9.1C3 7.94 4 7 5 7C5.5 7 6.13 7.44 6.38 8.1Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.5 14C9.13 13.5 8.75 12.88 8.5 12.25" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.12 4.88C19.12 5.5 19 6.25 18.5 7" />
    </svg>
);

export const ResearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477z" transform="translate(-4 -4)"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.31 8.31a6 6 0 00-8.485 8.485M18 12a6 6 0 100-12 6 6 0 000 12z"></path>
    </svg>
);