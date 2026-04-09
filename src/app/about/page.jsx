import Image from 'next/image';
import Me from '../../assets/iamges/_MG_0228.png'
import React from 'react';

export const metadata = {
  title: 'Me',
  description: '...',
}

const AboutPage = () => {
    return (
        <div>
         <h2>About Pages</h2>   
        <div className="flex justify-center">
      <Image
         src= "/23.jpg"
         alt='Md tanzid'
         width={300}
         height={200}
         >
      </Image>
    <Image
      src="https://images.unsplash.com/photo-1775716021167-e8133881470a"
      alt="Picture of the author"
      width={300}
      height={200}
    />
  </div>

      <Image
      src={Me}
      alt=''
      width={400}
      height={300}
      ></Image>
        </div>
    );
};

export default AboutPage;