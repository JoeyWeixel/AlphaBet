import NavBar from "@/components/navigation/NavBar";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <span>LeaderBoards</span>
      <NavBar />
    </div>
  );
}

export default Header;