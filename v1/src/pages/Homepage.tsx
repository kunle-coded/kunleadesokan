import Hero from '../components/hero/Hero';

function Homepage() {
  return (
    <div>
      <Hero />
      <h1>Remaining content</h1>
      <div
        style={{
          width: '350px',
          height: '900px',
          backgroundColor: 'lightcoral',
        }}
      ></div>
    </div>
  );
}

export default Homepage;
