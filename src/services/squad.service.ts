import { callService, METHOD } from "@utils/Api";

export const createSquadService = async (nameSquad: String)=>{
    const squad = await callService({method:METHOD.POST, url:"squad", body:{
        name_squad: nameSquad
    }})
    console.log(squad)
    return squad;
}