export class User {
    id?: number;	    // The id of the user.
    name!: string; 	// The name of the user.
    role?:	string;	// The role of the user is customer or admin
    email!:	string	// The email of the user.
    password!:	string;	// The password of the user.
    avatar!:	string;	// The string with URL to a image
}