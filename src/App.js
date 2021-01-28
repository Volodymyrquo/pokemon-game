import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';

function App() {
  const title = 'This is title';
  const descr = 'This is Description!';
  const id = 1;

  return (
    <>
      <Header title={title} descr={descr} />
      <Layout
        title={title}
        descr={descr}
        urlBg={{ backgroundImage: `url(${bg2})` }}
        id={id}
      />
      <Layout
        title={title}
        descr={descr}
        colorBg={{ backgroundColor: '#42f6f0' }}
        id={id}
      />
      <Layout
        title={title}
        descr={descr}
        urlBg={{ backgroundImage: `url(${bg3})` }}
        id={id}
      />
      <Footer />
    </>
  );
}

export default App;
