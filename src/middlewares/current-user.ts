import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
//import { UserPayload } from "../types";

interface UserPayload {
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

declare global {
	namespace Express {
		interface Request {
			currentUser?: UserPayload;
		}
	}
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session?.jwt) {
		return next();
	}

	try {
		const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET!) as UserPayload;
		req.currentUser = payload;
	} catch (err) {}

	next();
};
