import { useState } from 'react';
import './Header.css';
import { SignUpModal } from '../Main/SignUp';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <header>
            <div className="menu">
                <div className="menu-left">
                    <h3><Link to="/">Jobly.co</Link></h3>
                </div>
                <div className="menu-right">
                    <p>For Recruiters</p>
                    <button className="sign" onClick={openModal}>Sign up</button>
                    <button className="login">Log in</button>
                </div>
            </div>

            <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
};
