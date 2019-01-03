export interface User {
    id: number;
    fullname: string;
    email: string;
    img: string;
}
export interface LoginRequest {
    username: string;
    password: string;
    rememberMe: boolean;
}
export declare class Employment {
    id: number;
    review_rating_clean_average_rating: number;
    review_rating_clean_number_of_ratings: number;
    review_rating_climate_number_of_ratings: number;
    review_rating_employee_average_rating: number;
    review_rating_employee_number_of_ratings: number;
    review_rating_main_average_rating: number;
    review_rating_main_number_of_ratings: number;
    review_rating_service_average_rating: number;
    review_rating_service_number_of_ratings: number;
    is_owner: boolean;
    constructor(init: any);
}
