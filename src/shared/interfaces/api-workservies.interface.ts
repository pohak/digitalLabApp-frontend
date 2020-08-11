export interface WorkServiceHits {
    advert: [
        {
            relevance: number;
            id: string;
            external_id: string;
            webpage_url: string;
            logo_url: string;
            headline: string;
            application_deadline: string;
            number_of_vacancies: number;
            description: {
                text: string;
                company_information: number;
                needs: number;
                requirements: number;
                conditions: string;
            },
            employment_type: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            salary_type: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            salary_description: string;
            duration: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            working_hours_type: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            scope_of_work: {
                min: number;
                max: number;
            },
            access: number;
            employer: {
                phone_number: number;
                email: string
                url: number;
                organization_number: string;
                name: string;
                workplace: string;
            },
            application_details: {
                information: number;
                reference: string;
                email: number;
                via_af: boolean;
                url: string;
                other: number;
            },
            experience_required: boolean,
            access_to_own_car: boolean;
            driving_license_required: boolean;
            driving_license: number;
            occupation: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            occupation_group: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            occupation_field: {
                concept_id: string;
                label: string;
                legacy_ams_taxonomy_id: string;
            },
            workplace_address: {
                municipality: string;
                municipality_code: string;
                municipality_concept_id: string;
                region: string;
                region_code: string;
                region_concept_id: string;
                country: string;
                country_code: string;
                country_concept_id: string;
                street_address: number;
                postcode: number;
                city: number;
                coordinates: Array<number>
            },
            must_have: {
                skills: [],
                languages: [],
                work_experiences: [
                    {
                        weight: number;
                        concept_id: string;
                        label: string;
                        legacy_ams_taxonomy_id: string;
                    }
                ]
            },
            nice_to_have: {
                skills: [],
                languages: [],
                work_experiences: []
            },
            publication_date: string;
            last_publication_date: string;
            removed: boolean;
            removed_date: number;
            source_type: string;
            timestamp: number;
        }
    ]

}

