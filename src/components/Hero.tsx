import Image from 'next/image';
import { lusitana, robotoMono } from '@/components/ui/fonts';

type Props = {
  img: string;
  children: React.ReactNode;
};

export function HeroSection({img, children}: Props) {
  return (
	<section className={`${robotoMono.className} flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 py-12`}>

	  <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
		<img
		  src={img}
		  alt="Tolga Karanlikoglu"
		  className="rounded-full w-full h-full object-cover shadow-lg"
		/>
	  </div>

	  <div className="max-w-xl text-center md:text-left">
		<h1 className="text-xl md:text-4xl font-bold mb-4">
		  Hi, I'm Tolga Karanlikoglu
		</h1>
		<p className="text-lg text-gray-500 leading-relaxed">
		{children}
		</p>
	  </div>
	</section>
  );
}