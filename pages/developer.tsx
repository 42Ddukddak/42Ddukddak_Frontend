import Layout from '@/components/layout';
import tempPic from '../public/Ddukddak_logo.png';
import yongmipa from '../public/yongmipa.jpeg';
import sohyupar from '../public/sohyupar.jpeg';
import suhwpark from '../public/suhwpark.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Developer() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Link href={'https://github.com/42Ddukddak'}>
            <Image src={tempPic} alt="mainIMG" placeholder="blur" />
          </Link>
        </div>
        <div className="flex space-x-2">
          <Link href={'https://github.com/oio337a'}>
            <div className=" rounded-full border overflow-hidden my-hover">
              <Image src={yongmipa} alt="mainIMG" placeholder="blur" />
            </div>
            <div>
              <h1>yongmipa</h1>
              <span>Front</span>
            </div>
          </Link>
          <Link href={'https://github.com/saewoo1'}>
            <div className=" rounded-full border overflow-hidden my-hover">
              <Image src={sohyupar} alt="mainIMG" placeholder="blur" />
            </div>
          </Link>
          <Link href={'https://github.com/parksooo'}>
            <div className=" rounded-full border overflow-hidden my-hover">
              <Image src={suhwpark} alt="mainIMG" placeholder="blur" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
