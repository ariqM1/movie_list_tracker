import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/sign-in">Sign In</Link>
    </nav>
  );
}

export default Navbar;
