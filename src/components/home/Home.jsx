import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  return (
    <div className="container border my-5 text-center shadow">
      <h1 className="mt-3 text-primary">Welcome!, Home</h1>
      <p>Example by Hasanka Madhushan</p>
      <button
        onClick={() => history.push('/custom-home')}
        className="btn btn-outline-primary my-3"
      >
        Go to Custom Home
      </button>
    </div>
  );
}

export default Home;
