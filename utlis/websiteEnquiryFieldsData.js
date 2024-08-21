export const websiteEnquiryFieldsData = [
    {
        id: 'firstname', label: 'First name', type: 'text', required: true, autoComplete: "given-name", validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'First name should be at least 3 characters long'
    },
    {
        id: 'email', label: 'Email address', type: 'email', required: true, autoComplete: "email", validation: value => /\S+@\S+\.\S+/.test(value),
        errorMessage: 'Enter a valid email address'
    },
    {
        id: 'type_of_property',
        label: 'Type of property',
        type: 'select', // or 'radio' for single selection
        options: [
            { value: 'Apartment', label: 'Apartment' },
            { value: 'House', label: 'House' },
            { value: 'Vacation Rental', label: 'Vacation Rental' },
            { value: 'Airbnb', label: 'Airbnb' },
            { value: 'Other', label: 'Other' },
        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'Please select at least one'
    },
    {
        id: 'number_of_rooms',
        label: 'Number of rooms',
        type: 'select', // or 'radio' for single selection
        options: [
            { value: 'Studio', label: 'Studio' },
            { value: '1 Bedroom', label: '1 Bedroom' },
            { value: '3 Bedrooms', label: '3 Bedrooms' },
            { value: '4+ Bedrooms', label: '4+ Bedrooms' },


        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'Please select at least one'
    },
    {
        id: 'service_frequency',
        label: 'Preferred Cleaning Frequency',
        type: 'select', // or 'radio' for single selection
        options: [
            { value: "One-Time", label: "One-Time" },
            { value: "Daily", label: "Daily" },
            { value: "Weekly", label: "Weekly" },
            { value: "Fortnightly", label: "Fortnightly" },
            { value: "Monthly", label: "Monthly" },
            { value: "Other", label: "Other" },


        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 1;
            }
            return false;
        },
        errorMessage: 'Please select at least one'
    },

    {
        id: 'focus_areas',
        label: 'Specific Areas to Focus On',
        type: 'select', // or 'radio' for single selection
        multiple: true,
        options: [
            { value: "Kitchen", label: "Kitchen" },
            { value: "Bathrooms", label: "Bathrooms" },
            { value: "Bedrooms", label: "Bedrooms" },
            { value: "Living Room", label: "Living Room" },
            { value: "Windows", label: "Windows" },
            { value: "Carpet", label: "Carpet" },
            { value: "Upholstery", label: "Upholstery" },
            { value: "Other", label: "Other" },
        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'Please select at least one '
    },


    {
        id: 'budget2',
        label: 'What is your estimated budget?',
        type: 'radio', // or 'radio' for single selection
        options: [
            { value: "$199 - $699", label: "$199 - $699" },
            { value: "$700 - $1,999", label: "$700 - $1,999" },
            { value: "$2,000 - $4,000", label: "$2,000 - $4,000" },
        ],
        validation: value => {
            if (typeof value === 'string') {
                return value.trim().length > 2;
            }
            return false;
        },
        errorMessage: 'Please select at least one'
    },
    {
        id: 'message', label: 'Message', type: 'textarea', required: false,
    },

]