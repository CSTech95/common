export interface UserPayload {
	id: string | null;
	fName?: string | null;
	lName: string | null;
	email: string | null;
	otherInfo: {
		address: string | null;
		state: string | null;
		zip: string | null;
		createdAt: string | null;
	};
}

export declare global {
	namespace Express {
		export interface Request {
			currentUser?: UserPayload;
		}
	}
}

//declare namespace Express {
//	export interface Request {
//		currentUser: UserPayload;
//	}
//	export interface Response {
//		currentUser: UserPayload;
//	}
//}
