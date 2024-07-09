import { useState } from "react";
import Nav from "../UI Components/Nav";
import IdentityForm from "../UI Components/IdentityForm";
export default function Signin() {
  const [currentPage, setCurrentPage] = useState("signin");
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <IdentityForm currentPage={currentPage} />
      </main>
    </>
  );
}
