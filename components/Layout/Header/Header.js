import Image from 'next/image';

import headerStyles from './Header.module.scss';

import Logo from '../../../assets/images/pba-blue-and gold.webp';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <div className={`${headerStyles['logo-container']}`}>
                    <div className={headerStyles.logo}>
                        <Image src={Logo} height={90} width={80} alt='Logo' />
                    </div>
                    Florida Police Benevolent Association
                </div>
                <span>1(800) 733-3722</span>
            </div>
        </header>
    );
};

export default Header;
