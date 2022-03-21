import HeroSlider from './HeroSlider';

import heroStyles from './Hero.module.scss';

const CONTENT = [
    {
        text: 'Uniform Patrol Division operating at critical Staffing Levels',
    },
    {
        text: 'Sheriff’s staffing decisions are delaying issues that need to be addressed quickly',
    },
    {
        text: 'Deputies are leaving the force for better compensation and benefits',
    },
    {
        text: 'The staffing issues are creating an unsafe working environment and delaying calls for service.',
    },
];

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div className={`${heroStyles['hero-container']}`}>
                <div className={`${heroStyles['title-container']}`}>
                    <h1 className={`${heroStyles['heading-1']}`}>
                        Help keep Alachua County safe!
                    </h1>
                </div>
                <HeroSlider content={CONTENT} />
            </div>
        </section>
    );
};

export default Hero;
