import Navbar from './navbar'
const Container = ({children}) => {
  return (
    <>
      <Navbar />
      <main className='container py-5'>
         {children}
      </main>

      <footer className='bg-dark text-light text-center'>
        <div className="container p-4">
          <h1>&copy; 5NM80 Informática Empresarial</h1>
          <p>2022 - {new Date().getFullYear()}</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Container;