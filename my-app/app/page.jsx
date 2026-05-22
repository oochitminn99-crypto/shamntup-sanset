import Image from "next/image";

import Link from "next/link";

export default async function Page() {
  return (
    <div className="homeDiv">
      <div className="divContainer1">
        <div className="container">
          <div className="title">
            <h2 className="titleh">ဧရာပဒေသာ ဆန်</h2>
          </div>
          <div className="card">
            <img src="/aypdsan2.jpg" alt="riceImage" className="img"/>
          </div>
          <div className="base">
            <h2>တစ်အိတ် = 110000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer2">
        <div className="container">
          <div className="title">
            <h2>ဆင်းသုခ ဆန်</h2>
          </div>
          <div className="card">
            <img src="/sinthukasan2.jpg" alt="rice" className="img"/>
          </div>
          <div className="base">
            <h2>တစ်အိတ် = 90000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer3">
        <div className="container">
          <div className="title">
            <h2>ဧရာပဒေသာ စပါး</h2>
          </div>
          <div className="card">
            <img src="/paddy1.jpg" alt="paddy" className="img" />
          </div>
          <div className="base">
            <h2>တစ်တင်း = 27000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer4">
        <div className="container">
          <div className="title">
            <h2>ဆင်းသုခ စပါး</h2>
          </div>
          <div className="card">
            <img src="/paddy2.jpg" alt="paddy" className="img" />
          </div>
          <div className="base">
            <h2>တစ်တင်း = 22000</h2>
          </div>
        </div>        
      </div>

<div className="divContainer5">
        <div className="container">
          <div className="title">
            <h2>မှော်ဘီ(2) ဆန်</h2>
          </div>
          <div className="card">
            <img src="/hmbsan.jpg" alt="riceimg" className="img" />
          </div>
          <div className="base">
            <h2>တစ်အိတ် = 90000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer6">
        <div className="container">
          <div className="title">
            <h2 className="line-through decoration-white decoration-[2px]">ကောက်ကြီး ဆန်</h2>
          </div>
          <div className="card">
           <img src="/kautkyee.jpg" alt="riceimg" className="img" />
          </div>
          <div className="base">
            <h2> တစ်အိတ် = 80000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer7">
        <div className="container">
          <div className="title">
            <h2 className="line-through decoration-white decoration-[2px]">မှော်ဘီ(2) စပါး</h2>
          </div>
          <div className="card">
            <img src="/hmb.jpg" alt="" className="img" />
          </div>
          <div className="base">
            <h2> တစ်တင်း = 20000</h2>
          </div>
        </div>
      </div>

      <div className="divContainer8">
        <div className="container">
          <div className="title">
            <h2>ကောက်ကြီး စပါး</h2>
          </div>
          <div className="card">
            <img src="/kautkyee2.jpg" alt="" className="img" />
          </div>
          <div className="base">
            <h2>တစ်တင်း = 19000</h2>
          </div>
        </div>
      </div>

      <div className="layoutLink">
        <div className="linkDiv mb-4">
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

    </div>
  )
}