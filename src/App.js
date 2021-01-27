import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';

function App() {
  const bgImage2 = { backgroundImage: `url(${bg2})` };
  const bgImage3 = { backgroundImage: `url(${bg3})` };
  const colorBg = { backgroundColor: '#42f6f0' };
  const title = 'This is title';
  const descr = 'This is Description!';
  const id = 1;

  return (
    <>
      <Header title={title} descr={descr} />
      <Layout title={title} descr={descr} urlBg={bgImage2} id={id} />
      <Layout title={title} descr={descr} colorBg={colorBg} id={id} />
      <Layout title={title} descr={descr} urlBg={bgImage3} id={id} />
      <Footer />
    </>
  );
}

export default App;
