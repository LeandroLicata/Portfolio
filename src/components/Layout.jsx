import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="font">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
