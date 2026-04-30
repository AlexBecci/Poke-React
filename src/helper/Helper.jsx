export const primerMayuscula = (word)=>{
    return word[0].toUpperCase() + word.substring(1)
}

// Parsea la cadena evolutiva en un array plano de { name, id }
export const parseEvolutionChain = (chain) => {
    const evolutions = [];
    const traverse = (node) => {
        const id = node.species.url.split('/').filter(Boolean).pop();
        evolutions.push({ name: node.species.name, id });
        node.evolves_to.forEach(traverse);
    };
    traverse(chain);
    return evolutions;
};