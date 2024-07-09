import { useState } from "react";
import IdentityForm from "../UI Components/IdentityForm";
import Nav from "../UI Components/Nav";

export default function Signup() {
  const [currentPage, setCurrentPage] = useState("signup");
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <IdentityForm currentPage={currentPage} />
      </main>
    </>
  );
}
