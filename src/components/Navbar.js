import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/films">Films</Link>
            <Link href="/movie-list">Movie List</Link>
        </nav>
    );
}

export default Navbar;
