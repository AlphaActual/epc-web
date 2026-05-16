export type Sermon = {
	id: string;
	youtube_id: string;
	date: string;
	speaker_key: string;
	series_key: string | null;
	title_key: string;
	scripture_key: string;
	summary_key: string;
	topic_keys: string[];
};

export type SermonSeries = {
	id: string;
	title_key: string;
};

export type ChurchEvent = {
	id: string;
	type: 'recurring' | 'special';
	date_iso: string;
	end_date_iso: string | null;
	title_key: string;
	location_key: string;
	description_key: string | null;
	cta_key: string | null;
};

export type RecurringMeeting = {
	id: string;
	day_key: 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
	time: string;
	title_key: string;
	description_key: string;
	location_key: string;
};

export type LeadershipMember = {
	id: string;
	name: string;
	role_key: string;
	bio_key: string;
	photo: string;
};

export type Ministry = {
	id: string;
	icon: 'children' | 'youth' | 'home_group' | 'worship' | 'evangelism' | 'social';
	title_key: string;
	description_key: string;
};

export type SocialLink = {
	platform: 'youtube' | 'facebook' | 'instagram';
	url: string;
};

export type ContactInfo = {
	address: string;
	city: string;
	postal_code: string;
	phone: string;
	email: string;
	map_url: string;
	map_embed_url: string;
};
