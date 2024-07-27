import { get, post, put, del } from "./api.js";

//TODO change with current endpoint (see the description file)

const endpoints = {
    catalog: '/data/camps', //TODO with new jsonstorage?
    byId: '/data/camps', // ! Without "/"
    like: '/data/useful', //Optionall ==like
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

//Option Like
export async function likeUnit(data) {
    return post(endpoints.like, data);
}

export async function getLikesCount(characterId) {
    return get(`/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);  //TODO current url
}

export async function isAlreadyLiked(characterId, userId) {
    return get(`/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);  //TODO current url
}

//Option search
export async function searchUnits(query) {
    return get(`/data/cars?where=model%20LIKE%20%22${query}%22`);  //TODO current url
}

//Option comments

export async function getAllComments(data) {
    return get(endpoints.comments, data);
}

export async function createComment(campId, email, text) {
    const newComment =  await post(endpoints.comments, {
        campId,
        email,
        text,
    });

    return newComment;
}