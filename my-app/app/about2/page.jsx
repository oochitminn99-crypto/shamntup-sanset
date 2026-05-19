import Link from "next/link"

export default function Page() {

  return (
    <div className="about2Div">
      <h1 className="titleMemo">
        22 . 10. 1996 တွင် စပါး စတင်ကြိတ်ခွဲ ခဲ့ပါသည်။
      </h1>
      <h1 className="titleMemo underline underline-offset-4">
        စက်ဆရာများ
      </h1>
      <h1 className="titleMemo">
        ကိုဆန်းနိုင် (ခ) ကိုအငယ်လေး "ရေနံ့သာ"
      </h1>
      <h1 className="titleMemo">
        ကို၀င်းနိုင် "ရေနံ့သာ"
      </h1>
      <h1 className="titleMemo">
        ကိုဆန်း၀င်း "ငါးပုန်းကုန်း"
      </h1>
      <h1 className="titleMemo">
        ကိုဌေး၀င်း "သင်းသလယ်"
      </h1>

      <h1 className="titleMemo underline underline-offset-4">
        ဆန်စက်အညွှန်း
      </h1>
      <p className="titleMemo indent-10 sm:leading-5 md:leading-7 lg:leading-9">
        ကျွန်တော်တို့ နေ့စဥ် ထမင်းစားချိန်တွေမှာ စိတ်ညစ်စရာ အကောင်းဆုံးကဘာလဲဆိုတော့ ဆန်ကွဲ(ဇဂွဲ)သားတွေ ဆန်ထဲမှာပါလာပြီး ပြုပ်ရှပ်ရှပ်နဲ့ <span className="text-yellow-300"> ခနော</span>ဆန်ပြုတ်ကြီးစားနေရသလို အချိန်တွေပါပဲ။ ကိုယ့်ဒေသက မိုးတွင်းတစ်သီးသာ စိုက်တဲ့ လတ်ဆတ်တဲ့မြေဆီလွှာပေါ်က ထွက်တဲ့ စပါးကို ရုပ်ထွက်လေးလည်းလှအောင် ဆန်ကွဲထဲလည်း ဆန်စေ့တွေပါမသွားအောင်
        <span className="text-yellow-300">
          (ဆန်ကွဲထဲဆန်စေ့တွေပါသွားရင်တော့ခင်ဗျားစပါး သေချာပေါက်ဆန်ထွက်လျော့ပြီနော)
        </span>
        ဂရုစိုက်ရမှာပါ။ ဒါကြောင့် ဆန်သား အထွက်နှုန်းကောင်းအောင် ဆန်ကွဲသားသက်သက်ပဲ အတိအကျဖယ်ထုတ်ချင်တယ် ကိုယ့်စပါးကထွက်တဲ့အတိုင်း ရာနှုန်းပြည့် အလေအလွင့်မရှိ ရချင်တယ်ဆိုရင်တော့ <span className="text-yellow-300">ရှမ်းတပ်ကုန်း ဆန်စက်</span> ကို လာခဲ့လိုက်ပါ။ ဒါမျိုး  <img src="/lonezagar.jpg" alt="" width={50} height={20} className="inline-block rounded-sm" />  လုံးဇကာနဲ့ အကောင်းဆုံးနဲ့ အဆင်ပြေဆုံးဖြစ်သည်အထိ တာ၀န်ယူကြိတ်ခွဲပေးနေပါသည်။
      </p>

      <div className="nav2">
        <div className="layoutLink mt-6">
          <div className="linkDiv">
            <button className='linkBtn'>
              <Link href="/" className='navLink1'>ပင်မစာမျက်နှာ</Link>
            </button>
            <button className='linkBtn'>
              <Link href="/about1" className='navLink2'>ဖွဲဆန်ကွဲဈေး</Link>
            </button>
            <button className='linkBtn'>
              <Link href="/contact" className='navLink4'>ဖုန်းနံပါတ်များ</Link>
            </button>
            <button className='linkBtn'>
              <Link href="/blog" className='navLink5'>စာပေများ</Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}