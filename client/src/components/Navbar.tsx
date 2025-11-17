import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link href="/">Palestine Stories</Link>
            </div>
            <div className="navbar-menu">
                <Link href="/auth/signup">Sign Up</Link>
                <Link href="/auth/signin">Sign In</Link>
                <Link href="/stories">My Stories</Link>
            </div>
        </nav>
    );
};

export default Navbar;