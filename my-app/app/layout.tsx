import Link from 'next/link';
import './globals.css'
import Image from "next/image";
import type { ReactNode } from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ရှမ်းတပ်ကြီး ဆန်စက်",
    template: "%S | ရှမ်းတပ်ကြီး ဆန်စက်"
  },
  description: "မကွေးတိုင်း ၊ သရက်ခရိုင် ၊ အထက်မင်းလှမြို့နယ် ၊ ရှမ်းတပ်ကြီးကျေးရွာမှ လုံးဇကာတပ်ဆင်ထားတဲ့ဆန်စက် | shammtup village upper minnhla township magway division.",

  openGraph: {
    siteName: "ရှမ်းတပ်ကြီး ဆန်စက်",
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>ရှမ်းတပ်ကြီး ဆန်စက်</title>
      </head>
      <body className='body'>
        <header className='header'>
          <nav className='nav'>
            <div className='titlediv'>
              <h1 className='navtitle'>ရှမ်းတပ်ကြီး ဆန်စက်</h1>
            </div>

            <div className='layoutLink'>
              <div className='linkDiv'>
                <button className='linkBtn'>
                  <Link href="/" className='navLink1'>ပင်မစာမျက်နှာ</Link>
                </button>
                <button className='linkBtn'>
                  <Link href="/about1" className='navLink2'>ဖွဲဆန်ကွဲဈေး</Link>
                </button>
                <button className='linkBtn'>
                  <Link href="/about2" className='navLink3'>စက်မှတ်တမ်း</Link>
                </button>
                <button className='linkBtn'>
                  <Link href="/contact" className='navLink4'>ဖုန်းနံပါတ်များ</Link>
                </button>
                <button className='linkBtn'>
                  <Link href="/blog" className='navLink5'>စာကြည့်တိုက်</Link>
                </button>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className='footer'>
          NextJS V16.2.4 + TailwindCSS V3.4.19 တို့ ဖြင့် 'KhinMgMyint (web.dev.)'မှ ကုတ်(code)ထားပါသည်။ AI 0%
        </footer>
      </body>
    </html>
  )
}