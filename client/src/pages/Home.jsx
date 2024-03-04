import AddClientModal from '../components/AddClientModal';
import Clients from '../components/Clients';
import Projects from '../components/Projects';

function Home() {
  return (
    <>
      <div className='d-flex gap-4 mb-4'>
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}

export default Home;
