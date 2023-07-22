import { tequilas } from "@/lib/tequilas";

export default async function handler(req: any, res: any) {
    const random = Math.floor(Math.random() * tequilas.length);
    res.status(200).json(tequilas[random]);
}
