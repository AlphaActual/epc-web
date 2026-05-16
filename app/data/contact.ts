import type { ContactInfo, SocialLink } from '~~/@types/content';

export const contactInfo: ContactInfo = {
	address: 'Istarska ulica 12',
	city: 'Rovinj',
	postal_code: '52210',
	phone: '+385 52 123 456',
	email: 'info@epcrovinj.hr',
	map_url: 'https://maps.google.com/?q=Rovinj,+Croatia',
	map_embed_url:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11434.10!2d13.6386!3d45.0810!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA0JzUxLjYiTiAxM8KwMzgnMTkuMCJF!5e0!3m2!1sen!2shr!4v1700000000000',
};

export const socialLinks: SocialLink[] = [
	{ platform: 'youtube', url: 'https://www.youtube.com/@epcrovinj' },
	{ platform: 'facebook', url: 'https://www.facebook.com/epcrovinj' },
	{ platform: 'instagram', url: 'https://www.instagram.com/epcrovinj' },
];
