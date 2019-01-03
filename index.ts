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

export class Employment{

    id:                                       number;
    review_rating_clean_average_rating:       number;
    review_rating_clean_number_of_ratings:    number;
    review_rating_climate_number_of_ratings:  number;
    review_rating_employee_average_rating:    number;
    review_rating_employee_number_of_ratings: number;
    review_rating_main_average_rating:        number;
    review_rating_main_number_of_ratings:     number;
    review_rating_service_average_rating:     number;
    review_rating_service_number_of_ratings:  number;
    // employee:                                 Employee;
    // salon:                                    Salon;
    is_owner:                                 boolean;
    constructor(init: any) {
        this.id = init.id || null;
        this.review_rating_clean_average_rating = init.review_rating_clean_average_rating || null;     
        this.review_rating_clean_number_of_ratings = init.review_rating_clean_number_of_ratings   || null
        this.review_rating_climate_number_of_ratings = init.review_rating_climate_number_of_ratings || null
        this.review_rating_employee_average_rating = init.review_rating_employee_average_rating   || null
        this.review_rating_employee_number_of_ratings = init.review_rating_employee_number_of_ratings || null
        this.review_rating_main_average_rating = init.review_rating_main_average_rating   || null    
        this.review_rating_main_number_of_ratings = init.review_rating_main_number_of_ratings  || null  
        this.review_rating_service_average_rating = init.review_rating_service_average_rating  || null  
        this.review_rating_service_number_of_ratings = init.review_rating_service_number_of_ratings || null 
        // this.employee = new Employee(init.employee) || null;
        // this.salon = new Salon(init.salon) || null
        this.is_owner = init.is_owner || false;

    }

    // get label(){
    //     // return this.salon? this.salon.name : ''
    // }
        

    

}
