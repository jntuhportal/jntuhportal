import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ closeBanner }) => {
    return (
        <>
            <center className='mx-[10%]  shadow-2xl rounded-md border-1 border-black border-solid bg-stone-200'>
                <button className="absolute right-[11.7%] sm:right-[11%]" onClick={closeBanner}>
                    [x]
                </button>
                <div className="py-[7%] px-[2%]">

                    <div>This is a newer version of &nbsp;
                    <br/>
                        <a>
                            <Link href="https://jntuhresults.vercel.app/">
                                <strong>
                                    JNTUH Results
                                </strong>
                            </Link>
                        </a>
                    </div>
                    <center>
                    <Image src='/logo.png' href="https://jntuhresultsweb.vercel.app/" className="w-[60px]  sm:w-[120px]" alt="" width={80} height={60} /></center>
                    <small>Get your Results with your CGPA in a second</small>
                    <br />
                    <br />
                    <div>Check out the another Version of JNTUH RESULTS
                        <a>
                            <Link href="https://resultsjntuhv1.vercel.app/">
                                <strong className="hover:cursor-pointer"> here</strong>
                            </Link>
                        </a>
                    </div>
                </div>
            </center>
        </>
    )
}

export default HomeBanner;
