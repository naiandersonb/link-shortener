// buscar os links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);
    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

// salvar um link no localStorage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    // verificar se o link já existe no localStorage
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink) return;

    // adicionar o link na lista
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
}

// deletar algum link salvo
export function deleteLink(links, id) {

    let myLinks = links.filter(item => {
        return (item.id !== id);
    });

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    return myLinks;
}