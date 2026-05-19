import Link from "next/link"

export default function NotFound() {
    return (
        <div className="contactDiv grid">
            <h1 className="titleContact">
                ဤစာမျက်နှာအား မ‌ရေးရသေးပါ။
            </h1>
            <h3 className="titleContact">
                ပျော်ရွှင်ချမ်းမြေ့ပါစေ။
            </h3>

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
                            <Link href="/about2" className='navLink3'>စက်မှတ်တမ်း</Link>
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