import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

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
        
    
      
      </main>
    </div>
  );
}
