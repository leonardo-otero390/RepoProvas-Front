import { useNavigate } from "react-router-dom";
import TermAccordion from "../components/TermAccordion";
import TeacherAccordion from "../components/TeacherAccordion";
import Dashboard from "../components/Dashboard";

export default function Home({ type }: { type: "disciplines" | "teachers" }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    alert("É necessário estar logado para acessar a página");
    navigate("/");
    return <></>;
  }

  return (
    <>
      <Dashboard type={type} />
      {type === "disciplines" ? (
        <TermAccordion token={token} />
      ) : (
        <TeacherAccordion token={token} />
      )}
    </>
  );
}
