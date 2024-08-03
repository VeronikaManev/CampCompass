import { get, post, put, del } from "./api.js";


const endpoints = {
    catalog: '/data/camps', 
    byId: '/data/camps', 
    like: '/data/useful', 
    comments: '/data/comments',
}

export async function getAllUnits() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + '/' + id);
}

export async function createUnit(data) {
    return post(endpoints.byId, data);
}

export async function updateUnit(id, data) {
    return put(endpoints.byId + '/' + id, data);
}
export async function deleteUnit(id) {
    return del(endpoints.byId + '/' + id);
}

export async function getMyCamps(ownerId) {
    return get(`/data/camps?where=_ownerId%3D%22${ownerId}%22`);
}


//Likes
export async function likeUnit(data) {
    return post(endpoints.like, data);
}

export async function getLikesCount(characterId) {
    return get(`/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);  //TODO current url
}

export async function isAlreadyLiked(characterId, userId) {
    return get(`/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);  //TODO current url
}



//Comments

export async function getAllComments(campId) {
    return get(`/data/comments?where=campId%3D%22${campId}%22`);
}

export async function createComment(campId, email, text) {
    const newComment =  await post(endpoints.comments, {
        campId,
        email,
        text,
    });

    return newComment;
}