export const removeElement = (elements, payload) => {
    const index = elements.findIndex(rep => rep.id === payload.id);

    if (!index) throw new Error("Unknown element's index");

    return elements.splice(index, 1);
}