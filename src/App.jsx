import './App.css'
import Navbar from './Navbar'
import desktopImg from './assets/images/image-hero-desktop.png'
import mobileImg from './assets/images/image-hero-mobile.png'
import clientDatabiz from './assets/images/client-databiz.svg'
import clientAudiophile from './assets/images/client-audiophile.svg'
import clientMeet from './assets/images/client-meet.svg'
import clientMaker from './assets/images/client-maker.svg'

function App() {

	return (
		<div className='font-Epilogue'>
			<Navbar />
			<main className='md:flex md:pt-12 md:gap-4 flex-row-reverse md:mx-auto md:w-[80%] 2xl:pl-[10.5rem] 2xl:pr-[5rem]'>

				<img className="object-cover md:hidden w-[28rem] mx-auto" src={mobileImg} alt="" />
				<img className="object-contain hidden w-[68rem] md:flex md:flex-shrink-0-shrink-0 md:h-full md:w-1/2 md:max-w-[400px] lg:max-w-[35%] xl:max-w-[42%]" src={desktopImg} alt="" />

				{/* content starts here */}
				<div className="md:flex md:flex-col lg:block justify-between text-center md:text-start  lg:pt-0 ">
					<h1 className='text-4xl pt-8 font-bold text-[color:var(--Almost-Black)] pb-4 md:text-5xl md:pt-12 lg:text-[5.5rem] xl:pt-24'>Make <br className='hidden md:inline' /> remote work</h1>

					<p className='text-[color:var(--Medium-Gray)] font-medium px-2 md:pl-0 md:py-4 xl:pr-24 xl:text-xl 2xl:pr-56 xl:py-8'>Get your team in sync, no matte your location. Streamline processes,create team rituals, and watch productivity soar.</p>

					<div className="">
						<button className='py-3 px-5 my-4 bg-[color:var(--Almost-Black)] border-2 text-[color:var(--Almost-White)] rounded-2xl hover:bg-white hover:border-[color:var(--Almost-Black)] md:py-4 md:px-8 md:text-2xl'>
							Learn more
						</button>
					</div>

					<div className='md:my-10'>
						<div className="flex items-center justify-evenly md:justify-betweenmd:flex-wrap  md:content-between md:gap-3 lg:max-w-[80%]">
							<img className='lg:max-w-[25%] w-[19%] sm:max-w-[19%] aspect-[3/2] object-contain' src={clientDatabiz} alt="" />
							<img className='lg:max-w-[25%] w-[19%] sm:max-w-[19%] aspect-[3/2] object-contain' src={clientAudiophile} alt="" />
							<img className='lg:max-w-[25%] w-[19%] sm:max-w-[19%] aspect-[3/2] object-contain' src={clientMeet} alt="" />
							<img className='lg:max-w-[25%] w-[19%] sm:max-w-[19%] aspect-[3/2] object-contain' src={clientMaker} alt="" />
						</div>
					</div>
				</div>
				{/* content ends here */}
				
			</main>
		</div>
	)
}

export default App
