import { useState } from 'react';
import '../App.css';
import { Header } from '../components/Header';
import { Main } from '../components/Main';


function Home() {
  const [page, setPage] = useState(1);
  console.log(page);
  return (
    <div >
      <Header changePage={setPage} title=' ' />
      <Main page={page} />
    </div>
  );
}

export default Home;