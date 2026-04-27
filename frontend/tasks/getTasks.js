import { get} from ""

export const getTasks = async () => {
    const data = await get ('tasks');
    return data;
}