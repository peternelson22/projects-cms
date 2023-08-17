import hero from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>My Projects</h1>
          <p>
            These are some of my projects using various technology like React,
            NextJs, Redux, etc... showcasing my skills and abilities.
          </p>
        </div>
        <div className='img-container'>
          <img src={hero} alt='hero' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
