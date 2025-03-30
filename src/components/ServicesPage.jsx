import React from 'react';
import Card from './Card';

const ServicesPage = () => {
    // Array of services
    const services = [
        {
            image: 'cater1.jpg',
            title: 'Wedding Event',
            description: 'Make your wedding unforgettable with our exceptional catering services.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater2.jpg',
            title: 'Corporate Event',
            description: 'Professional catering for corporate events and business occasions.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater3.jpg',
            title: 'Birthday Party',
            description: 'Celebrate birthdays with delicious food and memorable experiences.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater4.jpg',
            title: 'Anniversary Celebration',
            description: 'Make anniversaries special with our tailored catering services.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater5.jpg',
            title: 'Baby Shower',
            description: 'Celebrate new beginnings with our delightful catering options.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater6.jpg',
            title: 'Graduation Party',
            description: 'Mark milestones with our exceptional catering services.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater7.jpg',
            title: 'Engagement Party',
            description: 'Celebrate engagements with our exquisite catering menus.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater8.jpg',
            title: 'Retirement Party',
            description: 'Honor retirements with our customized catering solutions.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater9.jpg',
            title: 'Festival Catering',
            description: 'Enjoy festivals with our delicious and festive catering options.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater10.jpg',
            title: 'Housewarming Party',
            description: 'Welcome guests to your new home with our catering services.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater11.jpg',
            title: 'Cocktail Party',
            description: 'Host elegant cocktail parties with our premium catering.',
            buttonText: 'Learn More',
        },
        {
            image: 'cater12.jpg',
            title: 'Charity Event',
            description: 'Support causes with our professional catering for charity events.',
            buttonText: 'Learn More',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-8 p-8">
            {services.map((service, index) => (
                <Card
                    key={index}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    buttonText={service.buttonText}
                />
            ))}
        </div>
    );
};

export default ServicesPage;