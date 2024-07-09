import Nav from "../UI Components/Nav";
export default function PageNotFound() {
  return (
    <>
      <Nav />
      <main className="content">
        <div className="page-not-found">
          <h1>:( Page you are looking for doesn't exists.</h1>
          <br />
          <button className="button" type="button">
            Go back
          </button>
        </div>
      </main>
    </>
  );
}
