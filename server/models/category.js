module.exports = (category) => ({
    id: category.id,
    name: category.name,
    content: category.content,
    subcategory: category.subcategory,
    children: JSON.stringify(category.children),
    player_id: category.player_id
})
