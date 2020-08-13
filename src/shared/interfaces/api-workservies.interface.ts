export interface WorkServiceHits {
    id: string;
    headline: string;
    logo_url: string;
    employer: {
        workplace: string;
    }
           
}

export interface AdvertHit {
    application_deadline: string;
    webpage_url: string;
    headline: string;
    logo_url: string;
    salary_description: string;
    application_details: {
        url: string;
    }
    working_hours_type: {
        label:string;
    }
    duration: {
        label: string;
    }
    description: {
        conditions: string;
        text_formatted: string;
    }
    workplace_address: {
        municipality: string;
        region: string;
    }
           
}
